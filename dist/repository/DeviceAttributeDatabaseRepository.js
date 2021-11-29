"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

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

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _collectionNames = _interopRequireDefault(require("./collectionNames"));

var _BaseRepository2 = _interopRequireDefault(require("./BaseRepository"));

var _excluded = ["variables"];

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context12; _forEachInstanceProperty(_context12 = ownKeys(Object(source), true)).call(_context12, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context13; _forEachInstanceProperty(_context13 = ownKeys(Object(source))).call(_context13, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// getByID, deleteByID and update uses model.deviceID as ID for querying
var DeviceAttributeDatabaseRepository = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(DeviceAttributeDatabaseRepository, _BaseRepository);

  var _super = _createSuper(DeviceAttributeDatabaseRepository);

  function DeviceAttributeDatabaseRepository(database, productDeviceRepository) {
    var _this;

    (0, _classCallCheck2["default"])(this, DeviceAttributeDatabaseRepository);
    _this = _super.call(this, database, _collectionNames["default"].DEVICE_ATTRIBUTES);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_database", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_collectionName", _collectionNames["default"].DEVICE_ATTRIBUTES);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productDeviceRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "create", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              throw new Error('The method is not implemented');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "deleteByID", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(deviceID) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this._database.remove(_this._collectionName, {
                  deviceID: deviceID.toLowerCase()
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var _context3, _context4;

      var userID,
          query,
          _args3 = arguments;
      return _regenerator["default"].wrap(function _callee3$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userID = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
              query = userID ? {
                ownerID: userID
              } : {};
              _context5.t0 = _map["default"];
              _context5.next = 5;
              return (0, _find["default"])(_context4 = _this._database).call(_context4, _this._collectionName, query);

            case 5:
              _context5.t1 = _context3 = _context5.sent;
              return _context5.abrupt("return", (0, _context5.t0)(_context5.t1).call(_context3, _this._parseVariables));

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee3);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByID", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(deviceID) {
        return _regenerator["default"].wrap(function _callee4$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = _this;
                _context6.next = 3;
                return _this._database.findOne(_this._collectionName, {
                  deviceID: deviceID.toLowerCase()
                });

              case 3:
                _context6.t1 = _context6.sent;
                return _context6.abrupt("return", _context6.t0._parseVariables.call(_context6.t0, _context6.t1));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByName", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(name) {
        return _regenerator["default"].wrap(function _callee5$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = _this;
                _context7.next = 3;
                return _this._database.findOne(_this._collectionName, {
                  name: name
                });

              case 3:
                _context7.t1 = _context7.sent;
                return _context7.abrupt("return", _context7.t0._parseVariables.call(_context7.t0, _context7.t1));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getManyFromIDs", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(deviceIDs, ownerID) {
        var _context8, _context9;

        return _regenerator["default"].wrap(function _callee6$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.t0 = _map["default"];
                _context10.next = 3;
                return (0, _find["default"])(_context9 = _this._database).call(_context9, _this._collectionName, _objectSpread({
                  deviceID: {
                    $in: (0, _map["default"])(deviceIDs).call(deviceIDs, function (id) {
                      return id.toLowerCase();
                    })
                  }
                }, ownerID ? {
                  ownerID: ownerID
                } : {}));

              case 3:
                _context10.t1 = _context8 = _context10.sent;
                return _context10.abrupt("return", (0, _context10.t0)(_context10.t1).call(_context8, _this._parseVariables));

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x4, _x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateByID", /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(deviceID, _ref7) {
        var variables, props, attributesToSave, existingAttributes, productDevice;
        return _regenerator["default"].wrap(function _callee7$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                variables = _ref7.variables, props = (0, _objectWithoutProperties2["default"])(_ref7, _excluded);
                attributesToSave = _objectSpread(_objectSpread(_objectSpread({}, props), variables ? {
                  variables: (0, _stringify["default"])(variables)
                } : {}), {}, {
                  deviceID: deviceID.toLowerCase()
                }); // Keep product-devices in sync

                _context11.next = 4;
                return _this.getByID(deviceID);

              case 4:
                existingAttributes = _context11.sent;
                _context11.next = 7;
                return _this._productDeviceRepository.getFromDeviceID(deviceID);

              case 7:
                productDevice = _context11.sent;

                if (!productDevice) {
                  _context11.next = 12;
                  break;
                }

                productDevice.productFirmwareVersion = existingAttributes ? existingAttributes.productFirmwareVersion : 65535;
                _context11.next = 12;
                return _this._productDeviceRepository.updateByID(productDevice.id, productDevice);

              case 12:
                return _context11.abrupt("return", _this._database.findAndModify(_this._collectionName, {
                  deviceID: deviceID.toLowerCase()
                }, {
                  $set: _objectSpread(_objectSpread({}, attributesToSave), {}, {
                    timestamp: new Date()
                  })
                }));

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x6, _x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_parseVariables", function (attributesFromDB) {
      if (!attributesFromDB) {
        return null;
      }

      var variables = attributesFromDB.variables;

      try {
        return _objectSpread(_objectSpread({}, attributesFromDB), {}, {
          variables: variables ? JSON.parse(variables) : undefined
        });
      } catch (ignore) {
        return attributesFromDB;
      }
    });
    _this._database = database;
    _this._productDeviceRepository = productDeviceRepository;
    return _this;
  }

  return DeviceAttributeDatabaseRepository;
}(_BaseRepository2["default"]);

var _default = DeviceAttributeDatabaseRepository;
exports["default"] = _default;