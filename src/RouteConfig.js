// @flow

import type {
  $Application,
  $Response,
  Middleware,
  NextFunction,
} from 'express';
import type { Container } from 'constitute';
import nullthrows from 'nullthrows';
import multer from 'multer';
import HttpError from './lib/HttpError';
import type { Request, Settings } from './types';
import Logger from './lib/logger';
const logger = Logger.createModuleLogger(module);

const maybe = (
  middleware: (req: Request, res: $Response, next: NextFunction) => mixed,
  condition: boolean,
): Middleware<Request, $Response> => (
  request: Request,
  response: $Response,
  next: NextFunction,
): mixed => {
  if (condition) {
    middleware(request, response, next);
  } else {
    next();
  }
};

const injectUserMiddleware = (
  container: Container,
): Middleware<Request, $Response> => (
  request: Request,
  response: $Response,
  next: NextFunction,
) => {
  const oauthInfo = response.locals.oauth;
  if (oauthInfo) {
    const { token } = (oauthInfo: any);
    const user = token && token.user;
    // eslint-disable-next-line no-param-reassign
    (request: any).user = user;
    container.constitute('IUserRepository').setCurrentUser(user);
  }
  next();
};

const serverSentEventsMiddleware = (): ((
  req: Request,
  res: $Response,
  next: NextFunction,
) => mixed) => (request: Request, response: $Response, next: NextFunction) => {
  request.socket.setNoDelay();
  response.writeHead(200, {
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'X-Accel-Buffering': 'no',
  });

  next();
};

export default (
  app: $Application<Request, $Response>,
  container: Container,
  controllers: Array<string>,
  settings: Settings,
) => {
  const filesMiddleware = (
    allowedUploads: ?Array<{
      maxCount: number,
      name: string,
    }> = [],
  ): ((req: Request, res: $Response, next: NextFunction) => mixed) =>
    nullthrows(allowedUploads).length
      ? multer().fields(allowedUploads)
      : multer().any();

  const oauth = container.constitute('OAuthServer');

  app.post(settings.LOGIN_ROUTE, oauth.token());

  controllers.forEach((controllerName: string) => {
    const controller = container.constitute(controllerName);
    Object.getOwnPropertyNames(
      (Object.getPrototypeOf(controller): any),
    ).forEach((functionName: string) => {
      const mappedFunction = (controller: any)[functionName];
      const {
        allowedUploads,
        anonymous,
        httpVerb,
        route,
        serverSentEvents,
      } = mappedFunction;

      if (!httpVerb) {
        return;
      }
      (app: any)[httpVerb](
        route,
        maybe(oauth.authenticate(), !anonymous),
        maybe(serverSentEventsMiddleware(), serverSentEvents),
        injectUserMiddleware(container),
        maybe(filesMiddleware(allowedUploads), allowedUploads),
        async (request: Request, response: $Response) => {
          const argumentNames = (
            route.match(/:[\w]*/g) || []
          ).map((argumentName: string): string =>
            argumentName.replace(':', ''),
          );
          const values = argumentNames.map(
            (argument: string): string => request.params[argument],
          );

          let controllerInstance = container.constitute(controllerName);

          // In order parallel requests on the controller, the state
          // (request/response/user) must be added to the controller.
          if (controllerInstance === controller) {
            // throw new Error(
            //   '`Transient.with` must be used when binding controllers',
            // );
            controllerInstance = Object.create(controllerInstance);
          }

          controllerInstance.request = request;
          controllerInstance.response = response;
          controllerInstance.user = (request: any).user;

          // Take access token out if it's posted.
          const { access_token: _, ...body } = (request.body: any);

          try {
            (allowedUploads || []).forEach(
              ({ maxCount, name }: { maxCount: number, name: string }) => {
                if (!name || !request.files) {
                  return;
                }
                const file = (request.files: any)[name];
                if (!file) {
                  return;
                }
                body[name] = maxCount === 1 ? file[0] : file;
              },
            );

            const functionResult = mappedFunction.call(
              controllerInstance,
              ...values,
              body,
            );

            // For SSE routes we don't return a result
            if (serverSentEvents) {
              return;
            }
            logger.info('FunctionResult', functionResult);

            if (functionResult.then) {
              const result = !serverSentEvents
                ? await Promise.race([
                    functionResult,
                    new Promise(
                      (
                        resolve: () => void,
                        reject: (error: Error) => void,
                      ): TimeoutID =>
                        setTimeout(
                          (): void => reject(new Error('timeout')),
                          settings.API_TIMEOUT,
                        ),
                    ),
                  ])
                : await functionResult;

              response
                .status(nullthrows(result).status)
                .json(nullthrows(result).data);
            } else {
              response.status(functionResult.status).json(functionResult.data);
            }
          } catch (error) {
            logger.error(error);
            const httpError = new HttpError(error);
            response.status(httpError.status).json({
              error: httpError.message,
              ok: false,
            });
          }
        },
      );
    });
  });

  app.all('*', (request: Request, response: $Response) => {
    response.sendStatus(404);
  });

  (app: any).use(
    (
      error: Error | {| code: number |},
      request: Request,
      response: $Response,
      // eslint-disable-next-line no-unused-vars
      next: NextFunction,
    ) => {
      response.status(400).json({
        error: error.code ? error.code : error,
        ok: false,
      });
    },
  );
};
