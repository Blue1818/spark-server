"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyNames = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-names"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _create = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/create"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _multer = _interopRequireDefault(require("multer"));

var _HttpError = _interopRequireDefault(require("./lib/HttpError"));

var _logger = _interopRequireDefault(require("./lib/logger"));

var _excluded = ["access_token"];

var logger = _logger["default"].createModuleLogger(module);

var maybe = function maybe(middleware, condition) {
  return function (request, response, next) {
    if (condition) {
      middleware(request, response, next);
    } else {
      next();
    }
  };
};

var injectUserMiddleware = function injectUserMiddleware(container) {
  return function (request, response, next) {
    var oauthInfo = response.locals.oauth;

    if (oauthInfo) {
      var _ref = oauthInfo,
          token = _ref.token;
      var user = token && token.user; // eslint-disable-next-line no-param-reassign

      request.user = user;
      container.constitute('IUserRepository').setCurrentUser(user);
    }

    next();
  };
};

var serverSentEventsMiddleware = function serverSentEventsMiddleware() {
  return function (request, response, next) {
    request.socket.setNoDelay();
    response.writeHead(200, {
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Content-Type': 'text/event-stream',
      'X-Accel-Buffering': 'no'
    });
    next();
  };
};

var _default = function _default(app, container, controllers, settings) {
  var filesMiddleware = function filesMiddleware() {
    var allowedUploads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return (0, _nullthrows["default"])(allowedUploads).length ? (0, _multer["default"])().fields(allowedUploads) : (0, _multer["default"])().any();
  };

  var oauth = container.constitute('OAuthServer');
  app.post(settings.LOGIN_ROUTE, oauth.token());
  (0, _forEach["default"])(controllers).call(controllers, function (controllerName) {
    var _context;

    var controller = container.constitute(controllerName);
    (0, _forEach["default"])(_context = (0, _getOwnPropertyNames["default"])((0, _getPrototypeOf["default"])(controller))).call(_context, function (functionName) {
      var mappedFunction = controller[functionName];
      var allowedUploads = mappedFunction.allowedUploads,
          anonymous = mappedFunction.anonymous,
          httpVerb = mappedFunction.httpVerb,
          route = mappedFunction.route,
          serverSentEvents = mappedFunction.serverSentEvents;

      if (!httpVerb) {
        return;
      }

      app[httpVerb](route, maybe(oauth.authenticate(), !anonymous), maybe(serverSentEventsMiddleware(), serverSentEvents), injectUserMiddleware(container), maybe(filesMiddleware(allowedUploads), allowedUploads), /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
          var _context2;

          var argumentNames, values, controllerInstance, _ref3, _, body, _context3, _context4, functionResult, result, httpError;

          return _regenerator["default"].wrap(function _callee$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  argumentNames = (0, _map["default"])(_context2 = route.match(/:[\w]*/g) || []).call(_context2, function (argumentName) {
                    return argumentName.replace(':', '');
                  });
                  values = (0, _map["default"])(argumentNames).call(argumentNames, function (argument) {
                    return request.params[argument];
                  });
                  controllerInstance = container.constitute(controllerName); // In order parallel requests on the controller, the state
                  // (request/response/user) must be added to the controller.

                  if (controllerInstance === controller) {
                    // throw new Error(
                    //   '`Transient.with` must be used when binding controllers',
                    // );
                    controllerInstance = (0, _create["default"])(controllerInstance);
                  }

                  controllerInstance.request = request;
                  controllerInstance.response = response;
                  controllerInstance.user = request.user; // Take access token out if it's posted.

                  _ref3 = request.body, _ = _ref3.access_token, body = (0, _objectWithoutProperties2["default"])(_ref3, _excluded);
                  _context5.prev = 8;
                  (0, _forEach["default"])(_context3 = allowedUploads || []).call(_context3, function (_ref4) {
                    var maxCount = _ref4.maxCount,
                        name = _ref4.name;

                    if (!name || !request.files) {
                      return;
                    }

                    var file = request.files[name];

                    if (!file) {
                      return;
                    }

                    body[name] = maxCount === 1 ? file[0] : file;
                  });
                  functionResult = mappedFunction.call.apply(mappedFunction, (0, _concat["default"])(_context4 = [controllerInstance]).call(_context4, (0, _toConsumableArray2["default"])(values), [body])); // For SSE routes we don't return a result

                  if (!serverSentEvents) {
                    _context5.next = 13;
                    break;
                  }

                  return _context5.abrupt("return");

                case 13:
                  if (!functionResult.then) {
                    _context5.next = 27;
                    break;
                  }

                  if (serverSentEvents) {
                    _context5.next = 20;
                    break;
                  }

                  _context5.next = 17;
                  return _promise["default"].race([functionResult, new _promise["default"](function (resolve, reject) {
                    return (0, _setTimeout2["default"])(function () {
                      return reject(new Error('timeout'));
                    }, settings.API_TIMEOUT);
                  })]);

                case 17:
                  _context5.t0 = _context5.sent;
                  _context5.next = 23;
                  break;

                case 20:
                  _context5.next = 22;
                  return functionResult;

                case 22:
                  _context5.t0 = _context5.sent;

                case 23:
                  result = _context5.t0;
                  response.status((0, _nullthrows["default"])(result).status).json((0, _nullthrows["default"])(result).data);
                  _context5.next = 28;
                  break;

                case 27:
                  response.status(functionResult.status).json(functionResult.data);

                case 28:
                  _context5.next = 35;
                  break;

                case 30:
                  _context5.prev = 30;
                  _context5.t1 = _context5["catch"](8);
                  logger.error(_context5.t1);
                  httpError = new _HttpError["default"](_context5.t1);
                  response.status(httpError.status).json({
                    error: httpError.message,
                    ok: false
                  });

                case 35:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee, null, [[8, 30]]);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
  });
  app.all('*', function (request, response) {
    response.sendStatus(404);
  });
  app.use(function (error, request, response, next) {
    response.status(400).json({
      error: error.code ? error.code : error,
      ok: false
    });
  });
};

exports["default"] = _default;