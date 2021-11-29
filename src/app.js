// @flow

import type {
  $Application,
  $Response,
  Middleware,
  NextFunction,
} from 'express';
import type { Container } from 'constitute';
import bodyParser from 'body-parser';
import express from 'express';
import bunyanMiddleware from 'bunyan-middleware';
import type { Request, Settings } from './types';
import Logger from './lib/logger';
import routeConfig from './RouteConfig';

const logger = Logger.createModuleLogger(module);

function createApp(
  container: Container,
  settings: Settings,
  existingApp?: $Application<Request, $Response>,
): $Application<Request, $Response> {
  const app = existingApp || express<Request, $Response>();

  const setCORSHeaders: Middleware<Request, $Response> = (
    request: Request,
    response: $Response,
    next: NextFunction,
  ): mixed => {
    if (request.method === 'OPTIONS') {
      response.set({
        'Access-Control-Allow-Headers':
          'X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '300',
      });
      return response.sendStatus(204);
    }
    response.set({
      'Access-Control-Allow-Origin': '*',
    });
    return next();
  };

  if (logger.debug()) {
    app.use(
      bunyanMiddleware({
        headerName: 'X-Request-Id',
        level: 'debug',
        logger,
        logName: 'req_id',
        obscureHeaders: [],
        propertyName: 'reqId',
      }),
    );
    logger.warn('Request logging enabled');
  }

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(setCORSHeaders);

  routeConfig(
    app,
    container,
    [
      'DeviceClaimsController',
      // to avoid routes collisions EventsController should be placed
      // before DevicesController
      'EventsController',
      'EventsControllerV2',
      'DevicesController',
      'OauthClientsController',
      'ProductsController',
      'ProductsControllerV2',
      'ProductFirmwaresController',
      'ProductFirmwaresControllerV2',
      'ProvisioningController',
      'UsersController',
      'WebhooksController',
    ],
    settings,
  );

  return app;
}

export default createApp;
