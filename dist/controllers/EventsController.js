"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor2 = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _setInterval2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-interval"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/applyDecoratedDescriptor"));

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _anonymous = _interopRequireDefault(require("../decorators/anonymous"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _serverSentEvents = _interopRequireDefault(require("../decorators/serverSentEvents"));

var _eventToApi = _interopRequireDefault(require("../lib/eventToApi"));

var _logger = _interopRequireDefault(require("../lib/logger"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context6; _forEachInstanceProperty(_context6 = ownKeys(Object(source), true)).call(_context6, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context7; _forEachInstanceProperty(_context7 = ownKeys(Object(source))).call(_context7, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var logger = _logger["default"].createModuleLogger(module);

var KEEP_ALIVE_INTERVAL = 9000;
var EventsController = (_dec = (0, _httpVerb["default"])('post'), _dec2 = (0, _route["default"])('/v1/ping'), _dec3 = (0, _anonymous["default"])(), _dec4 = (0, _httpVerb["default"])('get'), _dec5 = (0, _route["default"])('/v1/events/:eventNamePrefix?*'), _dec6 = (0, _serverSentEvents["default"])(), _dec7 = (0, _httpVerb["default"])('get'), _dec8 = (0, _route["default"])('/v1/devices/events/:eventNamePrefix?*'), _dec9 = (0, _serverSentEvents["default"])(), _dec10 = (0, _httpVerb["default"])('get'), _dec11 = (0, _route["default"])('/v1/devices/:deviceIDorName/events/:eventNamePrefix?*'), _dec12 = (0, _serverSentEvents["default"])(), _dec13 = (0, _httpVerb["default"])('post'), _dec14 = (0, _route["default"])('/v1/devices/events'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(EventsController, _Controller);

  var _super = _createSuper(EventsController);

  function EventsController(eventManager, deviceManager) {
    var _this;

    (0, _classCallCheck2["default"])(this, EventsController);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_eventManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deviceManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_keepAliveIntervalID", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_lastEventDate", new Date());
    _this._eventManager = eventManager;
    _this._deviceManager = deviceManager;
    return _this;
  }

  (0, _createClass2["default"])(EventsController, [{
    key: "ping",
    value: function () {
      var _ping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(payload) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.ok(_objectSpread(_objectSpread({}, payload), {}, {
                  serverPayload: Math.random()
                })));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ping(_x) {
        return _ping.apply(this, arguments);
      }

      return ping;
    }()
  }, {
    key: "getEvents",
    value: function () {
      var _getEvents = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(eventNamePrefix) {
        var _this2 = this;

        var subscriptionID, keepAliveIntervalID;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                subscriptionID = this._eventManager.subscribe(eventNamePrefix, // eslint-disable-next-line flowtype/require-parameter-type, flowtype/require-return-type
                function () {
                  return _this2._pipeEvent.apply(_this2, arguments);
                }, this._getUserFilter());
                keepAliveIntervalID = this._startKeepAlive();

                this._closeStream(subscriptionID, keepAliveIntervalID);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getEvents(_x2) {
        return _getEvents.apply(this, arguments);
      }

      return getEvents;
    }()
  }, {
    key: "getMyEvents",
    value: function () {
      var _getMyEvents = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(eventNamePrefix) {
        var _this3 = this;

        var subscriptionID, keepAliveIntervalID;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                subscriptionID = this._eventManager.subscribe(eventNamePrefix, // eslint-disable-next-line flowtype/require-parameter-type, flowtype/require-return-type
                function () {
                  return _this3._pipeEvent.apply(_this3, arguments);
                }, _objectSpread({
                  mydevices: true
                }, this._getUserFilter()));
                keepAliveIntervalID = this._startKeepAlive();

                this._closeStream(subscriptionID, keepAliveIntervalID);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getMyEvents(_x3) {
        return _getMyEvents.apply(this, arguments);
      }

      return getMyEvents;
    }()
  }, {
    key: "getDeviceEvents",
    value: function () {
      var _getDeviceEvents = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(deviceIDorName, eventNamePrefix) {
        var _this4 = this;

        var deviceID, subscriptionID, keepAliveIntervalID;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 2:
                deviceID = _context4.sent;
                subscriptionID = this._eventManager.subscribe(eventNamePrefix, // eslint-disable-next-line flowtype/require-parameter-type, flowtype/require-return-type
                function () {
                  return _this4._pipeEvent.apply(_this4, arguments);
                }, _objectSpread({
                  deviceID: deviceID
                }, this._getUserFilter()));
                keepAliveIntervalID = this._startKeepAlive();

                this._closeStream(subscriptionID, keepAliveIntervalID);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDeviceEvents(_x4, _x5) {
        return _getDeviceEvents.apply(this, arguments);
      }

      return getDeviceEvents;
    }()
  }, {
    key: "publish",
    value: function () {
      var _publish = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(postBody) {
        var eventData;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                eventData = _objectSpread({
                  data: postBody.data,
                  isPublic: !postBody["private"],
                  name: postBody.name,
                  ttl: postBody.ttl
                }, this._getUserFilter());

                this._eventManager.publish(eventData);

                return _context5.abrupt("return", this.ok({
                  ok: true
                }));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function publish(_x6) {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  }, {
    key: "_closeStream",
    value: function _closeStream(subscriptionID, keepAliveIntervalID) {
      var _this5 = this;

      var closeStreamHandler = function closeStreamHandler() {
        _this5._eventManager.unsubscribe(subscriptionID);

        clearInterval(keepAliveIntervalID);
      };

      this.request.on('close', closeStreamHandler);
      this.request.on('end', closeStreamHandler);
      this.response.on('finish', closeStreamHandler);
      this.response.on('end', closeStreamHandler);
    }
  }, {
    key: "_getUserFilter",
    value: function _getUserFilter() {
      return this.user.role === 'administrator' ? {} : {
        userID: this.user.id
      };
    }
  }, {
    key: "_startKeepAlive",
    value: function _startKeepAlive() {
      var _this6 = this;

      return (0, _setInterval2["default"])(function () {
        if (new Date() - _this6._lastEventDate >= KEEP_ALIVE_INTERVAL) {
          _this6.response.write('\n');

          _this6._updateLastEventDate();
        }
      }, KEEP_ALIVE_INTERVAL);
    }
  }, {
    key: "_pipeEvent",
    value: function _pipeEvent(event) {
      try {
        this.response.write("event: ".concat(event.name || '', "\n"));
        this.response.write("data: ".concat((0, _stringify["default"])((0, _eventToApi["default"])(event)), "\n\n"));

        this._updateLastEventDate();
      } catch (error) {
        logger.error({
          deviceID: event.deviceID,
          err: error,
          event: event
        }, 'pipeEvents - write error');
        throw error;
      }
    }
  }, {
    key: "_updateLastEventDate",
    value: function _updateLastEventDate() {
      this._lastEventDate = new Date();
    }
  }]);
  return EventsController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "ping", [_dec, _dec2, _dec3], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "ping"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getEvents", [_dec4, _dec5, _dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getEvents"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getMyEvents", [_dec7, _dec8, _dec9], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getMyEvents"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getDeviceEvents", [_dec10, _dec11, _dec12], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getDeviceEvents"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "publish", [_dec13, _dec14], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "publish"), _class.prototype)), _class));
var _default = EventsController;
exports["default"] = _default;