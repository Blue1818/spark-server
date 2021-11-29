"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _hogan = _interopRequireDefault(require("hogan.js"));

var _request = _interopRequireDefault(require("request"));

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _settings = _interopRequireDefault(require("../settings"));

var _logger = _interopRequireDefault(require("../lib/logger"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context11; _forEachInstanceProperty2(_context11 = ownKeys(Object(source), true)).call(_context11, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context12; _forEachInstanceProperty2(_context12 = ownKeys(Object(source))).call(_context12, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var logger = _logger["default"].createModuleLogger(module);

var parseEventData = function parseEventData(event) {
  try {
    if (event.data) {
      return JSON.parse(event.data);
    }

    return {};
  } catch (error) {
    return {};
  }
};

var splitBufferIntoChunks = function splitBufferIntoChunks(buffer, chunkSize) {
  var chunks = [];
  var ii = 0;

  while (ii < buffer.length) {
    chunks.push((0, _slice["default"])(buffer).call(buffer, ii, ii += chunkSize));
  }

  return chunks;
};

var validateRequestType = function validateRequestType(requestType) {
  var upperRequestType = requestType.toUpperCase();

  if (!(0, _includes["default"])(REQUEST_TYPES).call(REQUEST_TYPES, upperRequestType)) {
    throw new _HttpError["default"]('wrong requestType');
  }

  return upperRequestType;
};

var REQUEST_TYPES = ['DELETE', 'GET', 'POST', 'PUT'];
var MAX_WEBHOOK_ERRORS_COUNT = 10;
var WEBHOOK_THROTTLE_TIME = 1000 * 60; // 1min;

var MAX_RESPONSE_MESSAGE_CHUNK_SIZE = 512;
var MAX_RESPONSE_MESSAGE_SIZE = 100000;
var WEBHOOK_DEFAULTS = {
  rejectUnauthorized: true
};

var WebhookManager = /*#__PURE__*/function () {
  function WebhookManager(eventPublisher, permissionManager, webhookRepository) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, WebhookManager);
    (0, _defineProperty2["default"])(this, "_eventPublisher", void 0);
    (0, _defineProperty2["default"])(this, "_subscriptionIDsByWebhookID", new _map["default"]());
    (0, _defineProperty2["default"])(this, "_errorsCountByWebhookID", new _map["default"]());
    (0, _defineProperty2["default"])(this, "_webhookRepository", void 0);
    (0, _defineProperty2["default"])(this, "_permissonManager", void 0);
    (0, _defineProperty2["default"])(this, "runWebhookThrottled", (0, _throttle["default"])( // eslint-disable-next-line flowtype/require-return-type, flowtype/require-parameter-type
    function () {
      return _this.runWebhook.apply(_this, arguments);
    }, WEBHOOK_THROTTLE_TIME, {
      leading: false,
      trailing: true
    }));
    (0, _defineProperty2["default"])(this, "_callWebhook", function (webhook, event, requestOptions) {
      return new _promise["default"](function (resolve, reject) {
        return (0, _request["default"])(requestOptions, function (error, response, responseBody) {
          var onResponseError = function onResponseError(responseError) {
            _this._incrementWebhookErrorCounter(webhook.id);

            _this._eventPublisher.publish({
              data: error != null ? error.message || error.errorMessage || '' : '',
              name: _this._compileErrorResponseTopic(webhook, event),
              userID: event.userID
            }, {
              isPublic: false
            });

            reject(responseError);
          };

          if (error) {
            onResponseError(error);
            return;
          }

          if (response.statusCode >= 400) {
            onResponseError(error || new Error(response.statusMessage));
            return;
          }

          _this._resetWebhookErrorCounter(webhook.id);

          _this._eventPublisher.publish({
            name: "hook-sent/".concat(event.name),
            userID: event.userID
          }, {
            isPublic: false
          });

          resolve(responseBody);
        });
      });
    });
    (0, _defineProperty2["default"])(this, "_getEventVariables", function (event) {
      var defaultWebhookVariables = _objectSpread({
        PARTICLE_DEVICE_ID: event.deviceID,
        PARTICLE_EVENT_NAME: event.name,
        PARTICLE_EVENT_VALUE: event.data,
        PARTICLE_PUBLISHED_AT: event.publishedAt,
        // old event names, added for compatibility
        SPARK_CORE_ID: event.deviceID,
        SPARK_EVENT_NAME: event.name,
        SPARK_EVENT_VALUE: event.data,
        SPARK_PUBLISHED_AT: event.publishedAt
      }, _settings["default"].WEBHOOK_TEMPLATE_PARAMETERS);

      var eventDataVariables = parseEventData(event);
      return _objectSpread(_objectSpread({}, defaultWebhookVariables), eventDataVariables);
    });
    (0, _defineProperty2["default"])(this, "_getRequestData", function (customData, event, noDefaults) {
      var defaultEventData = {
        coreid: event.deviceID,
        data: event.data,
        event: event.name,
        published_at: event.publishedAt
      };
      return noDefaults ? customData : _objectSpread(_objectSpread({}, defaultEventData), customData || {});
    });
    (0, _defineProperty2["default"])(this, "_compileTemplate", function (template, variables) {
      return template && _hogan["default"].compile(template).render(variables);
    });
    (0, _defineProperty2["default"])(this, "_compileJsonTemplate", function (template, variables) {
      if (!template) {
        return undefined;
      }

      var compiledTemplate = _this._compileTemplate((0, _stringify["default"])(template), variables);

      if (!compiledTemplate) {
        return undefined;
      }

      return JSON.parse(compiledTemplate);
    });
    (0, _defineProperty2["default"])(this, "_compileErrorResponseTopic", function (webhook, event) {
      var variables = _this._getEventVariables(event);

      return _this._compileTemplate(webhook.errorResponseTopic, variables) || "hook-error/".concat(event.name);
    });
    (0, _defineProperty2["default"])(this, "_incrementWebhookErrorCounter", function (webhookID) {
      var errorsCount = _this._errorsCountByWebhookID.get(webhookID) || 0;

      _this._errorsCountByWebhookID.set(webhookID, errorsCount + 1);
    });
    (0, _defineProperty2["default"])(this, "_resetWebhookErrorCounter", function (webhookID) {
      _this._errorsCountByWebhookID.set(webhookID, 0);
    });
    this._eventPublisher = eventPublisher;
    this._permissonManager = permissionManager;
    this._webhookRepository = webhookRepository;
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this._init();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }

  (0, _createClass2["default"])(WebhookManager, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(model) {
        var webhook;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._webhookRepository.create(_objectSpread(_objectSpread({}, WEBHOOK_DEFAULTS), model));

              case 2:
                webhook = _context2.sent;

                this._subscribeWebhook(webhook);

                return _context2.abrupt("return", webhook);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteByID",
    value: function () {
      var _deleteByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(webhookID) {
        var webhook;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._permissonManager.getEntityByID('webhook', webhookID);

              case 2:
                webhook = _context3.sent;

                if (webhook) {
                  _context3.next = 5;
                  break;
                }

                throw new _HttpError["default"]('no webhook found', 404);

              case 5:
                _context3.next = 7;
                return this._webhookRepository.deleteByID(webhookID);

              case 7:
                this._unsubscribeWebhookByID(webhookID);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteByID(_x2) {
        return _deleteByID.apply(this, arguments);
      }

      return deleteByID;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this._permissonManager.getAllEntitiesForCurrentUser('webhook'));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getByID",
    value: function () {
      var _getByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(webhookID) {
        var webhook;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._permissonManager.getEntityByID('webhook', webhookID);

              case 2:
                webhook = _context5.sent;

                if (webhook) {
                  _context5.next = 5;
                  break;
                }

                throw new _HttpError["default"]('no webhook found', 404);

              case 5:
                return _context5.abrupt("return", webhook);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getByID(_x3) {
        return _getByID.apply(this, arguments);
      }

      return getByID;
    }()
  }, {
    key: "_init",
    value: function () {
      var _init2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _this2 = this;

        var allWebhooks;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._webhookRepository.getAll();

              case 2:
                allWebhooks = _context6.sent;
                (0, _forEach["default"])(allWebhooks).call(allWebhooks, function (webhook) {
                  return _this2._subscribeWebhook(webhook);
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _init() {
        return _init2.apply(this, arguments);
      }

      return _init;
    }()
  }, {
    key: "_subscribeWebhook",
    value: function _subscribeWebhook(webhook) {
      var subscriptionID = this._eventPublisher.subscribe(webhook.event, this._onNewWebhookEvent(webhook), {
        filterOptions: {
          deviceID: webhook.deviceID,
          listenToBroadcastedEvents: false,
          mydevices: webhook.mydevices,
          userID: webhook.ownerID
        }
      });

      this._subscriptionIDsByWebhookID.set(webhook.id, subscriptionID);
    }
  }, {
    key: "_unsubscribeWebhookByID",
    value: function _unsubscribeWebhookByID(webhookID) {
      var subscriptionID = this._subscriptionIDsByWebhookID.get(webhookID);

      if (!subscriptionID) {
        return;
      }

      this._eventPublisher.unsubscribe(subscriptionID);

      this._subscriptionIDsByWebhookID["delete"](webhookID);
    }
  }, {
    key: "_onNewWebhookEvent",
    value: function _onNewWebhookEvent(webhook) {
      var _this3 = this;

      return function (event) {
        try {
          var webhookErrorCount = _this3._errorsCountByWebhookID.get(webhook.id) || 0;

          if (webhookErrorCount < MAX_WEBHOOK_ERRORS_COUNT) {
            _this3.runWebhook(webhook, event);

            return;
          }

          _this3._eventPublisher.publish({
            data: 'Too many errors, webhook disabled',
            name: _this3._compileErrorResponseTopic(webhook, event),
            userID: event.userID
          }, {
            isPublic: false
          });

          _this3.runWebhookThrottled(webhook, event);
        } catch (error) {
          logger.error({
            deviceID: event.deviceID,
            err: error,
            event: event,
            webhook: webhook
          }, 'Webhook Error');
        }
      };
    }
  }, {
    key: "runWebhook",
    value: function () {
      var _runWebhook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(webhook, event) {
        var _this4 = this;

        var _context7, webhookVariablesObject, requestAuth, requestJson, requestFormData, requestHeaders, requestUrl, requestQuery, responseTopic, requestType, isGetRequest, _requestOptions, _responseBody, isResponseBodyAnObject, responseTemplate, responseEventData, chunks;

        return _regenerator["default"].wrap(function _callee7$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                webhookVariablesObject = this._getEventVariables(event);
                requestAuth = this._compileJsonTemplate(webhook.auth, webhookVariablesObject);
                requestJson = this._compileJsonTemplate(webhook.json, webhookVariablesObject);
                requestFormData = this._compileJsonTemplate(webhook.form, webhookVariablesObject);
                requestHeaders = this._compileJsonTemplate(webhook.headers, webhookVariablesObject);
                requestUrl = this._compileTemplate(webhook.url, webhookVariablesObject);
                requestQuery = this._compileJsonTemplate(webhook.query, webhookVariablesObject);
                responseTopic = this._compileTemplate(webhook.responseTopic, webhookVariablesObject);
                requestType = this._compileTemplate(webhook.requestType, webhookVariablesObject);
                isGetRequest = requestType === 'GET';
                _requestOptions = {
                  auth: requestAuth,
                  body: requestJson && !isGetRequest ? this._getRequestData(requestJson, event, webhook.noDefaults) : undefined,
                  form: !requestJson && !isGetRequest ? this._getRequestData(requestFormData || null, event, webhook.noDefaults) || event.data : undefined,
                  headers: requestHeaders,
                  json: true,
                  method: validateRequestType((0, _nullthrows["default"])(requestType)),
                  qs: isGetRequest ? this._getRequestData(requestQuery, event, webhook.noDefaults) : requestQuery,
                  strictSSL: webhook.rejectUnauthorized,
                  url: (0, _nullthrows["default"])(requestUrl)
                };
                _context10.next = 14;
                return this._callWebhook(webhook, event, _requestOptions);

              case 14:
                _responseBody = _context10.sent;

                if (_responseBody) {
                  _context10.next = 17;
                  break;
                }

                return _context10.abrupt("return");

              case 17:
                isResponseBodyAnObject = _responseBody === Object(_responseBody);
                responseTemplate = webhook.responseTemplate && isResponseBodyAnObject && _hogan["default"].compile(webhook.responseTemplate).render(_responseBody);
                responseEventData = responseTemplate || (isResponseBodyAnObject ? (0, _stringify["default"])(_responseBody) : _responseBody);
                chunks = splitBufferIntoChunks((0, _slice["default"])(_context7 = Buffer.from(responseEventData)).call(_context7, 0, MAX_RESPONSE_MESSAGE_SIZE), MAX_RESPONSE_MESSAGE_CHUNK_SIZE);
                (0, _forEach["default"])(chunks).call(chunks, function (chunk, index) {
                  var _context8, _context9;

                  var responseEventName = responseTopic && (0, _concat["default"])(_context8 = "".concat(responseTopic, "/")).call(_context8, index) || (0, _concat["default"])(_context9 = "hook-response/".concat(event.name, "/")).call(_context9, index);

                  _this4._eventPublisher.publish({
                    data: chunk.toString(),
                    name: responseEventName,
                    userID: event.userID
                  }, {
                    isPublic: false
                  });
                });
                logger.info({
                  deviceID: event.deviceID,
                  event: event,
                  name: webhook.event,
                  requestOptions: _requestOptions,
                  responseBody: _responseBody,
                  webhook: webhook
                }, 'Webhook');
                _context10.next = 28;
                break;

              case 25:
                _context10.prev = 25;
                _context10.t0 = _context10["catch"](0);
                logger.error({
                  deviceID: event.deviceID,
                  err: _context10.t0,
                  event: event,
                  webhook: webhook
                }, 'Webhook Error');

              case 28:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee7, this, [[0, 25]]);
      }));

      function runWebhook(_x4, _x5) {
        return _runWebhook.apply(this, arguments);
      }

      return runWebhook;
    }()
  }]);
  return WebhookManager;
}();

var _default = WebhookManager;
exports["default"] = _default;