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

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _endsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/ends-with"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

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

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _FirmwareCompilationManager = _interopRequireDefault(require("../managers/FirmwareCompilationManager"));

var _allowUpload = _interopRequireDefault(require("../decorators/allowUpload"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _deviceToAPI = _interopRequireDefault(require("../lib/deviceToAPI"));

var _logger = _interopRequireDefault(require("../lib/logger"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context12; _forEachInstanceProperty(_context12 = ownKeys(Object(source), true)).call(_context12, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context13; _forEachInstanceProperty(_context13 = ownKeys(Object(source))).call(_context13, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var logger = _logger["default"].createModuleLogger(module);

var DevicesController = (_dec = (0, _httpVerb["default"])('post'), _dec2 = (0, _route["default"])('/v1/devices'), _dec3 = (0, _httpVerb["default"])('get'), _dec4 = (0, _route["default"])('/v1/binaries/:binaryID'), _dec5 = (0, _httpVerb["default"])('post'), _dec6 = (0, _route["default"])('/v1/binaries'), _dec7 = (0, _allowUpload["default"])(), _dec8 = (0, _httpVerb["default"])('delete'), _dec9 = (0, _route["default"])('/v1/devices/:deviceIDorName'), _dec10 = (0, _httpVerb["default"])('get'), _dec11 = (0, _route["default"])('/v1/devices'), _dec12 = (0, _httpVerb["default"])('get'), _dec13 = (0, _route["default"])('/v1/devices/:deviceIDorName'), _dec14 = (0, _httpVerb["default"])('get'), _dec15 = (0, _route["default"])('/v1/devices/:deviceIDorName/:varName/'), _dec16 = (0, _httpVerb["default"])('put'), _dec17 = (0, _route["default"])('/v1/devices/:deviceIDorName'), _dec18 = (0, _allowUpload["default"])('file', 1), _dec19 = (0, _httpVerb["default"])('post'), _dec20 = (0, _route["default"])('/v1/devices/:deviceIDorName/:functionName'), _dec21 = (0, _httpVerb["default"])('put'), _dec22 = (0, _route["default"])('/v1/devices/:deviceIDorName/ping'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(DevicesController, _Controller);

  var _super = _createSuper(DevicesController);

  function DevicesController(deviceManager) {
    var _this;

    (0, _classCallCheck2["default"])(this, DevicesController);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deviceManager", void 0);
    _this._deviceManager = deviceManager;
    return _this;
  }

  (0, _createClass2["default"])(DevicesController, [{
    key: "claimDevice",
    value: function () {
      var _claimDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(postBody) {
        var deviceID;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deviceID = postBody.id;
                _context.prev = 1;
                _context.next = 4;
                return this._deviceManager.getDeviceID(deviceID);

              case 4:
                deviceID = _context.sent;
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);

              case 9:
                _context.next = 11;
                return this._deviceManager.claimDevice(deviceID, this.user.id);

              case 11:
                return _context.abrupt("return", this.ok({
                  ok: true
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function claimDevice(_x) {
        return _claimDevice.apply(this, arguments);
      }

      return claimDevice;
    }()
  }, {
    key: "getAppFirmware",
    value: function () {
      var _getAppFirmware = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(binaryID) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.ok(_FirmwareCompilationManager["default"].getBinaryForID(binaryID)));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAppFirmware(_x2) {
        return _getAppFirmware.apply(this, arguments);
      }

      return getAppFirmware;
    }()
  }, {
    key: "compileSources",
    value: function () {
      var _compileSources = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(postBody) {
        var response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _FirmwareCompilationManager["default"].compileSource((0, _nullthrows["default"])(postBody.platform_id || postBody.product_id), this.request.files);

              case 2:
                response = _context3.sent;

                if (response) {
                  _context3.next = 5;
                  break;
                }

                throw new _HttpError["default"]('Error during compilation');

              case 5:
                return _context3.abrupt("return", this.ok(_objectSpread(_objectSpread({}, response), {}, {
                  binary_url: "/v1/binaries/".concat(response.binary_id),
                  ok: true
                })));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function compileSources(_x3) {
        return _compileSources.apply(this, arguments);
      }

      return compileSources;
    }()
  }, {
    key: "unclaimDevice",
    value: function () {
      var _unclaimDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(deviceIDorName) {
        var deviceID;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 2:
                deviceID = _context4.sent;
                _context4.next = 5;
                return this._deviceManager.unclaimDevice(deviceID);

              case 5:
                return _context4.abrupt("return", this.ok({
                  ok: true
                }));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function unclaimDevice(_x4) {
        return _unclaimDevice.apply(this, arguments);
      }

      return unclaimDevice;
    }()
  }, {
    key: "getDevices",
    value: function () {
      var _getDevices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var devices;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this._deviceManager.getAll();

              case 3:
                devices = _context5.sent;
                return _context5.abrupt("return", this.ok((0, _map["default"])(devices).call(devices, function (device) {
                  return (0, _deviceToAPI["default"])(device);
                })));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                // I wish we could return no devices found but meh :/
                // at least we should issue a warning
                logger.warn({
                  err: _context5.t0
                }, 'get devices throws error, possibly no devices found?');
                return _context5.abrupt("return", this.ok([]));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function getDevices() {
        return _getDevices.apply(this, arguments);
      }

      return getDevices;
    }()
  }, {
    key: "getDevice",
    value: function () {
      var _getDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(deviceIDorName) {
        var deviceID, device;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 2:
                deviceID = _context6.sent;
                _context6.next = 5;
                return this._deviceManager.getByID(deviceID);

              case 5:
                device = _context6.sent;
                return _context6.abrupt("return", this.ok((0, _deviceToAPI["default"])(device)));

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getDevice(_x5) {
        return _getDevice.apply(this, arguments);
      }

      return getDevice;
    }()
  }, {
    key: "getVariableValue",
    value: function () {
      var _getVariableValue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(deviceIDorName, varName) {
        var deviceID, varValue, errorMessage;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 3:
                deviceID = _context7.sent;
                _context7.next = 6;
                return this._deviceManager.getVariableValue(deviceID, varName);

              case 6:
                varValue = _context7.sent;
                return _context7.abrupt("return", this.ok({
                  result: varValue
                }));

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](0);
                errorMessage = _context7.t0.message;

                if (!errorMessage.match('Variable not found')) {
                  _context7.next = 15;
                  break;
                }

                throw new _HttpError["default"]('Variable not found', 404);

              case 15:
                throw _context7.t0;

              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 10]]);
      }));

      function getVariableValue(_x6, _x7) {
        return _getVariableValue.apply(this, arguments);
      }

      return getVariableValue;
    }()
  }, {
    key: "updateDevice",
    value: function () {
      var _updateDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(deviceIDorName, postBody) {
        var deviceID, updatedAttributes, _context8, flashResult, file, _ref, originalname, _flashResult;

        return _regenerator["default"].wrap(function _callee8$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 2:
                deviceID = _context9.sent;

                if (!postBody.name) {
                  _context9.next = 8;
                  break;
                }

                _context9.next = 6;
                return this._deviceManager.renameDevice(deviceID, postBody.name);

              case 6:
                updatedAttributes = _context9.sent;
                return _context9.abrupt("return", this.ok({
                  name: updatedAttributes.name,
                  ok: true
                }));

              case 8:
                if (!postBody.signal) {
                  _context9.next = 14;
                  break;
                }

                if ((0, _includes["default"])(_context8 = ['1', '0']).call(_context8, postBody.signal)) {
                  _context9.next = 11;
                  break;
                }

                throw new _HttpError["default"]('Wrong signal value');

              case 11:
                _context9.next = 13;
                return this._deviceManager.raiseYourHand(deviceID, !!(0, _parseInt2["default"])(postBody.signal, 10));

              case 13:
                return _context9.abrupt("return", this.ok({
                  id: deviceID,
                  ok: true
                }));

              case 14:
                if (!postBody.app_id) {
                  _context9.next = 19;
                  break;
                }

                _context9.next = 17;
                return this._deviceManager.flashKnownApp(deviceID, postBody.app_id);

              case 17:
                flashResult = _context9.sent;
                return _context9.abrupt("return", this.ok({
                  id: deviceID,
                  status: flashResult.status
                }));

              case 19:
                // 4 flash device with custom application
                file = postBody.file;

                if (file) {
                  _context9.next = 22;
                  break;
                }

                throw new Error('Firmware file not provided');

              case 22:
                _ref = file, originalname = _ref.originalname;

                if (!(originalname === 'binary' || (0, _endsWith["default"])(originalname).call(originalname, '.bin'))) {
                  _context9.next = 28;
                  break;
                }

                _context9.next = 26;
                return this._deviceManager.flashBinary(deviceID, file);

              case 26:
                _flashResult = _context9.sent;
                return _context9.abrupt("return", this.ok({
                  id: deviceID,
                  status: _flashResult.status
                }));

              case 28:
                throw new _HttpError["default"]('Did not update device');

              case 29:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateDevice(_x8, _x9) {
        return _updateDevice.apply(this, arguments);
      }

      return updateDevice;
    }()
  }, {
    key: "callDeviceFunction",
    value: function () {
      var _callDeviceFunction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(deviceIDorName, functionName, postBody) {
        var deviceID, result, device, errorMessage;
        return _regenerator["default"].wrap(function _callee9$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 3:
                deviceID = _context10.sent;
                _context10.next = 6;
                return this._deviceManager.callFunction(deviceID, functionName, postBody);

              case 6:
                result = _context10.sent;
                _context10.next = 9;
                return this._deviceManager.getByID(deviceID);

              case 9:
                device = _context10.sent;
                return _context10.abrupt("return", this.ok((0, _deviceToAPI["default"])(device, result)));

              case 13:
                _context10.prev = 13;
                _context10.t0 = _context10["catch"](0);
                errorMessage = _context10.t0.message;

                if (!((0, _indexOf["default"])(errorMessage).call(errorMessage, 'Unknown Function') >= 0)) {
                  _context10.next = 18;
                  break;
                }

                throw new _HttpError["default"]('Function not found', 404);

              case 18:
                throw _context10.t0;

              case 19:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee9, this, [[0, 13]]);
      }));

      function callDeviceFunction(_x10, _x11, _x12) {
        return _callDeviceFunction.apply(this, arguments);
      }

      return callDeviceFunction;
    }()
  }, {
    key: "pingDevice",
    value: function () {
      var _pingDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(deviceIDorName) {
        var deviceID;
        return _regenerator["default"].wrap(function _callee10$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 2:
                deviceID = _context11.sent;
                _context11.t0 = this;
                _context11.next = 6;
                return this._deviceManager.ping(deviceID);

              case 6:
                _context11.t1 = _context11.sent;
                return _context11.abrupt("return", _context11.t0.ok.call(_context11.t0, _context11.t1));

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee10, this);
      }));

      function pingDevice(_x13) {
        return _pingDevice.apply(this, arguments);
      }

      return pingDevice;
    }()
  }]);
  return DevicesController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "claimDevice", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "claimDevice"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getAppFirmware", [_dec3, _dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getAppFirmware"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "compileSources", [_dec5, _dec6, _dec7], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "compileSources"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "unclaimDevice", [_dec8, _dec9], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "unclaimDevice"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getDevices", [_dec10, _dec11], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getDevices"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getDevice", [_dec12, _dec13], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getDevice"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getVariableValue", [_dec14, _dec15], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getVariableValue"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updateDevice", [_dec16, _dec17, _dec18], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "updateDevice"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "callDeviceFunction", [_dec19, _dec20], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "callDeviceFunction"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "pingDevice", [_dec21, _dec22], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "pingDevice"), _class.prototype)), _class));
var _default = DevicesController;
exports["default"] = _default;