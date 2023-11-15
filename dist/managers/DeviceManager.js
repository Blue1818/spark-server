"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

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

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _ecKey = _interopRequireDefault(require("ec-key"));

var _nodeRsa = _interopRequireDefault(require("node-rsa"));

var _sparkProtocol = require("spark-protocol");

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _excluded = ["connected"];

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context17; _forEachInstanceProperty(_context17 = ownKeys(Object(source), true)).call(_context17, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context18; _forEachInstanceProperty(_context18 = ownKeys(Object(source))).call(_context18, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DeviceManager = /*#__PURE__*/function () {
  function DeviceManager(deviceAttributeRepository, deviceFirmwareRepository, deviceKeyRepository, permissionManager, eventPublisher) {
    (0, _classCallCheck2["default"])(this, DeviceManager);
    (0, _defineProperty2["default"])(this, "_deviceAttributeRepository", void 0);
    (0, _defineProperty2["default"])(this, "_deviceFirmwareRepository", void 0);
    (0, _defineProperty2["default"])(this, "_deviceKeyRepository", void 0);
    (0, _defineProperty2["default"])(this, "_permissionManager", void 0);
    (0, _defineProperty2["default"])(this, "_eventPublisher", void 0);
    this._deviceAttributeRepository = deviceAttributeRepository;
    this._deviceFirmwareRepository = deviceFirmwareRepository;
    this._deviceKeyRepository = deviceKeyRepository;
    this._permissionManager = permissionManager;
    this._eventPublisher = eventPublisher;
  }

  (0, _createClass2["default"])(DeviceManager, [{
    key: "claimDevice",
    value: function () {
      var _claimDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(deviceID, userID) {
        var attributes;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._deviceAttributeRepository.getByID(deviceID);

              case 2:
                attributes = _context.sent;

                if (attributes) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this._deviceAttributeRepository.updateByID(deviceID, {
                  deviceID: deviceID,
                  ownerID: userID,
                  registrar: userID
                }));

              case 5:
                if (!(attributes.ownerID && attributes.ownerID !== userID)) {
                  _context.next = 7;
                  break;
                }

                throw new _HttpError["default"]('The device belongs to someone else.');

              case 7:
                if (!(attributes.ownerID && attributes.ownerID === userID)) {
                  _context.next = 9;
                  break;
                }

                throw new _HttpError["default"]('The device is already claimed.');

              case 9:
                _context.next = 11;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    attributes: {
                      ownerID: userID
                    },
                    deviceID: deviceID
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.UPDATE_DEVICE_ATTRIBUTES
                });

              case 11:
                return _context.abrupt("return", this._deviceAttributeRepository.updateByID(deviceID, {
                  ownerID: userID
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function claimDevice(_x, _x2) {
        return _claimDevice.apply(this, arguments);
      }

      return claimDevice;
    }()
  }, {
    key: "unclaimDevice",
    value: function () {
      var _unclaimDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(deviceID) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getByID(deviceID);

              case 2:
                _context2.next = 4;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    attributes: {
                      ownerID: null
                    },
                    deviceID: deviceID
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.UPDATE_DEVICE_ATTRIBUTES
                });

              case 4:
                return _context2.abrupt("return", this._deviceAttributeRepository.updateByID(deviceID, {
                  ownerID: null
                }));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function unclaimDevice(_x3) {
        return _unclaimDevice.apply(this, arguments);
      }

      return unclaimDevice;
    }()
  }, {
    key: "getAttributesByID",
    value: function () {
      var _getAttributesByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(deviceID) {
        var _yield$this$getByID, connected, attributes;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getByID(deviceID);

              case 2:
                _yield$this$getByID = _context3.sent;
                connected = _yield$this$getByID.connected;
                attributes = (0, _objectWithoutProperties2["default"])(_yield$this$getByID, _excluded);
                return _context3.abrupt("return", attributes);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAttributesByID(_x4) {
        return _getAttributesByID.apply(this, arguments);
      }

      return getAttributesByID;
    }()
  }, {
    key: "getByID",
    value: function () {
      var _getByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(deviceID) {
        var connectedDeviceAttributes, attributes;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID.toLowerCase()
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.GET_DEVICE_ATTRIBUTES
                });

              case 2:
                connectedDeviceAttributes = _context4.sent;

                if (!(!connectedDeviceAttributes.error && this._permissionManager.doesUserHaveAccess(connectedDeviceAttributes))) {
                  _context4.next = 7;
                  break;
                }

                _context4.t0 = connectedDeviceAttributes;
                _context4.next = 10;
                break;

              case 7:
                _context4.next = 9;
                return this._permissionManager.getEntityByID('deviceAttributes', deviceID);

              case 9:
                _context4.t0 = _context4.sent;

              case 10:
                attributes = _context4.t0;

                if (attributes) {
                  _context4.next = 13;
                  break;
                }

                throw new _HttpError["default"]('No device found', 404);

              case 13:
                return _context4.abrupt("return", _objectSpread(_objectSpread({}, attributes), {}, {
                  connected: !connectedDeviceAttributes.error,
                  lastFlashedAppName: null
                }));

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getByID(_x5) {
        return _getByID.apply(this, arguments);
      }

      return getByID;
    }()
  }, {
    key: "getDeviceID",
    value: function () {
      var _getDeviceID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(deviceIDorName) {
        var device, hasPermission;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._deviceAttributeRepository.getByID(deviceIDorName);

              case 2:
                device = _context5.sent;

                if (!(device == null)) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 6;
                return this._deviceAttributeRepository.getByName(deviceIDorName);

              case 6:
                device = _context5.sent;

              case 7:
                if (!(device == null)) {
                  _context5.next = 9;
                  break;
                }

                throw new _HttpError["default"]('No device found', 404);

              case 9:
                hasPermission = this._permissionManager.doesUserHaveAccess(device);

                if (hasPermission) {
                  _context5.next = 12;
                  break;
                }

                throw new _HttpError["default"]("User doesn't have access", 403);

              case 12:
                return _context5.abrupt("return", device.deviceID);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getDeviceID(_x6) {
        return _getDeviceID.apply(this, arguments);
      }

      return getDeviceID;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _this = this;

        var devicesAttributes, devicePromises;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._permissionManager.getAllEntitiesForCurrentUser('deviceAttributes');

              case 2:
                devicesAttributes = _context7.sent;
                devicePromises = (0, _map["default"])(devicesAttributes).call(devicesAttributes, /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(attributes) {
                    var pingResponse;
                    return _regenerator["default"].wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return _this._eventPublisher.publishAndListenForResponse({
                              context: {
                                deviceID: attributes.deviceID
                              },
                              name: _sparkProtocol.SPARK_SERVER_EVENTS.PING_DEVICE
                            });

                          case 2:
                            pingResponse = _context6.sent;
                            return _context6.abrupt("return", _objectSpread(_objectSpread({}, attributes), {}, {
                              connected: pingResponse.connected || false,
                              lastFlashedAppName: null,
                              lastHeard: pingResponse.lastHeard || attributes.lastHeard
                            }));

                          case 4:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x7) {
                    return _ref.apply(this, arguments);
                  };
                }());
                return _context7.abrupt("return", _promise["default"].all(devicePromises));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "callFunction",
    value: function () {
      var _callFunction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(deviceID, functionName, functionArguments) {
        var callFunctionResponse, error, result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._permissionManager.checkPermissionsForEntityByID('deviceAttributes', deviceID);

              case 2:
                _context8.next = 4;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID,
                    functionArguments: functionArguments,
                    functionName: functionName
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.CALL_DEVICE_FUNCTION
                });

              case 4:
                callFunctionResponse = _context8.sent;
                error = callFunctionResponse.error, result = callFunctionResponse.result;

                if (!error) {
                  _context8.next = 8;
                  break;
                }

                throw new _HttpError["default"](error);

              case 8:
                return _context8.abrupt("return", result);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function callFunction(_x8, _x9, _x10) {
        return _callFunction.apply(this, arguments);
      }

      return callFunction;
    }()
  }, {
    key: "getVariableValue",
    value: function () {
      var _getVariableValue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(deviceID, variableName) {
        var getVariableResponse, error, result;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._permissionManager.checkPermissionsForEntityByID('deviceAttributes', deviceID);

              case 2:
                _context9.next = 4;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID,
                    variableName: variableName
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.GET_DEVICE_VARIABLE_VALUE
                });

              case 4:
                getVariableResponse = _context9.sent;
                error = getVariableResponse.error, result = getVariableResponse.result;

                if (!error) {
                  _context9.next = 8;
                  break;
                }

                throw new _HttpError["default"](error);

              case 8:
                return _context9.abrupt("return", result);

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getVariableValue(_x11, _x12) {
        return _getVariableValue.apply(this, arguments);
      }

      return getVariableValue;
    }()
  }, {
    key: "forceFirmwareUpdate",
    value: function () {
      var _forceFirmwareUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(deviceID) {
        var getVariableResponse, error, result;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._permissionManager.checkPermissionsForEntityByID('deviceAttributes', deviceID);

              case 2:
                _context10.next = 4;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.GET_DEVICE_VARIABLE_VALUE
                });

              case 4:
                getVariableResponse = _context10.sent;
                error = getVariableResponse.error, result = getVariableResponse.result;

                if (!error) {
                  _context10.next = 8;
                  break;
                }

                throw new _HttpError["default"](error);

              case 8:
                return _context10.abrupt("return", result);

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function forceFirmwareUpdate(_x13) {
        return _forceFirmwareUpdate.apply(this, arguments);
      }

      return forceFirmwareUpdate;
    }()
  }, {
    key: "flashBinary",
    value: function () {
      var _flashBinary = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(deviceID, file) {
        var flashResponse, error;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this._permissionManager.checkPermissionsForEntityByID('deviceAttributes', deviceID);

              case 2:
                _context11.next = 4;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID,
                    fileBuffer: file.buffer,
                    fileName: file.name
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.FLASH_DEVICE
                });

              case 4:
                flashResponse = _context11.sent;
                error = flashResponse.error;

                if (!error) {
                  _context11.next = 8;
                  break;
                }

                throw new _HttpError["default"](error);

              case 8:
                return _context11.abrupt("return", flashResponse);

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function flashBinary(_x14, _x15) {
        return _flashBinary.apply(this, arguments);
      }

      return flashBinary;
    }()
  }, {
    key: "flashKnownApp",
    value: function () {
      var _flashKnownApp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(deviceID, appName) {
        var knownFirmware, flashResponse, error;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._permissionManager.checkPermissionsForEntityByID('deviceAttributes', deviceID);

              case 2:
                knownFirmware = this._deviceFirmwareRepository.getByName(appName);

                if (knownFirmware) {
                  _context12.next = 5;
                  break;
                }

                throw new _HttpError["default"]("No firmware ".concat(appName, " found"), 404);

              case 5:
                _context12.next = 7;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID,
                    fileBuffer: knownFirmware,
                    fileName: appName
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.FLASH_DEVICE
                });

              case 7:
                flashResponse = _context12.sent;
                error = flashResponse.error;

                if (!error) {
                  _context12.next = 11;
                  break;
                }

                throw new _HttpError["default"](error);

              case 11:
                return _context12.abrupt("return", flashResponse);

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function flashKnownApp(_x16, _x17) {
        return _flashKnownApp.apply(this, arguments);
      }

      return flashKnownApp;
    }()
  }, {
    key: "flashProductFirmware",
    value: function flashProductFirmware(productID) {
      var deviceID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._eventPublisher.publish({
        context: {
          deviceID: deviceID,
          productID: productID
        },
        name: _sparkProtocol.SPARK_SERVER_EVENTS.FLASH_PRODUCT_FIRMWARE
      });
    }
  }, {
    key: "ping",
    value: function () {
      var _ping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(deviceID) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._permissionManager.checkPermissionsForEntityByID('deviceAttributes', deviceID);

              case 2:
                return _context13.abrupt("return", this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.PING_DEVICE
                }));

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function ping(_x18) {
        return _ping.apply(this, arguments);
      }

      return ping;
    }()
  }, {
    key: "provision",
    value: function () {
      var _provision = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(deviceID, userID, publicKey, algorithm) {
        var eccKey, createdKey;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!(algorithm === 'ecc')) {
                  _context14.next = 12;
                  break;
                }

                _context14.prev = 1;
                eccKey = new _ecKey["default"](publicKey, 'pem');

                if (!eccKey.isPrivateECKey) {
                  _context14.next = 5;
                  break;
                }

                throw new _HttpError["default"]('Not a public key');

              case 5:
                _context14.next = 10;
                break;

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](1);
                throw new _HttpError["default"]("Key error ".concat(_context14.t0));

              case 10:
                _context14.next = 21;
                break;

              case 12:
                _context14.prev = 12;
                createdKey = new _nodeRsa["default"](publicKey);

                if (createdKey.isPublic()) {
                  _context14.next = 16;
                  break;
                }

                throw new _HttpError["default"]('Not a public key');

              case 16:
                _context14.next = 21;
                break;

              case 18:
                _context14.prev = 18;
                _context14.t1 = _context14["catch"](12);
                throw new _HttpError["default"]("Key error ".concat(_context14.t1));

              case 21:
                _context14.next = 23;
                return this._deviceKeyRepository.updateByID(deviceID, {
                  algorithm: algorithm,
                  deviceID: deviceID,
                  key: publicKey
                });

              case 23:
                _context14.next = 25;
                return this._deviceAttributeRepository.updateByID(deviceID, {
                  ownerID: userID,
                  registrar: userID
                });

              case 25:
                return _context14.abrupt("return", this.getByID(deviceID));

              case 26:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[1, 7], [12, 18]]);
      }));

      function provision(_x19, _x20, _x21, _x22) {
        return _provision.apply(this, arguments);
      }

      return provision;
    }()
  }, {
    key: "raiseYourHand",
    value: function () {
      var _raiseYourHand = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(deviceID, shouldShowSignal) {
        var raiseYourHandResponse, error;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._permissionManager.checkPermissionsForEntityByID('deviceAttributes', deviceID);

              case 2:
                _context15.next = 4;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    deviceID: deviceID,
                    shouldShowSignal: shouldShowSignal
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.RAISE_YOUR_HAND
                });

              case 4:
                raiseYourHandResponse = _context15.sent;
                error = raiseYourHandResponse.error;

                if (!error) {
                  _context15.next = 8;
                  break;
                }

                throw new _HttpError["default"](error);

              case 8:
                return _context15.abrupt("return", raiseYourHandResponse);

              case 9:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function raiseYourHand(_x23, _x24) {
        return _raiseYourHand.apply(this, arguments);
      }

      return raiseYourHand;
    }()
  }, {
    key: "renameDevice",
    value: function () {
      var _renameDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(deviceID, name) {
        var attributes;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.getAttributesByID(deviceID);

              case 2:
                attributes = _context16.sent;
                _context16.next = 5;
                return this._eventPublisher.publishAndListenForResponse({
                  context: {
                    attributes: {
                      name: name
                    },
                    deviceID: deviceID
                  },
                  name: _sparkProtocol.SPARK_SERVER_EVENTS.UPDATE_DEVICE_ATTRIBUTES
                });

              case 5:
                return _context16.abrupt("return", this._deviceAttributeRepository.updateByID(deviceID, {
                  name: name
                }));

              case 6:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function renameDevice(_x25, _x26) {
        return _renameDevice.apply(this, arguments);
      }

      return renameDevice;
    }()
  }]);
  return DeviceManager;
}();

var _default = DeviceManager;
exports["default"] = _default;