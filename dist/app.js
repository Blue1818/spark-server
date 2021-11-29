"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _bunyanMiddleware = _interopRequireDefault(require("bunyan-middleware"));

var _logger = _interopRequireDefault(require("./lib/logger"));

var _RouteConfig = _interopRequireDefault(require("./RouteConfig"));

var logger = _logger["default"].createModuleLogger(module);

function createApp(container, settings, existingApp) {
  var app = existingApp || (0, _express["default"])();

  var setCORSHeaders = function setCORSHeaders(request, response, next) {
    if (request.method === 'OPTIONS') {
      response.set({
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '300'
      });
      return response.sendStatus(204);
    }

    response.set({
      'Access-Control-Allow-Origin': '*'
    });
    return next();
  };

  if (logger.debug()) {
    app.use((0, _bunyanMiddleware["default"])({
      headerName: 'X-Request-Id',
      level: 'debug',
      logger: logger,
      logName: 'req_id',
      obscureHeaders: [],
      propertyName: 'reqId'
    }));
    logger.warn('Request logging enabled');
  }

  app.use(_bodyParser["default"].json());
  app.use(_bodyParser["default"].urlencoded({
    extended: true
  }));
  app.use(setCORSHeaders);
  (0, _RouteConfig["default"])(app, container, ['DeviceClaimsController', // to avoid routes collisions EventsController should be placed
  // before DevicesController
  'EventsController', 'EventsControllerV2', 'DevicesController', 'OauthClientsController', 'ProductsController', 'ProductsControllerV2', 'ProductFirmwaresController', 'ProductFirmwaresControllerV2', 'ProvisioningController', 'UsersController', 'WebhooksController'], settings);
  return app;
}

var _default = createApp;
exports["default"] = _default;