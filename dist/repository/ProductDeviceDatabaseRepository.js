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

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

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

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context15; _forEachInstanceProperty(_context15 = ownKeys(Object(source), true)).call(_context15, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context16; _forEachInstanceProperty(_context16 = ownKeys(Object(source))).call(_context16, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductDeviceDatabaseRepository = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(ProductDeviceDatabaseRepository, _BaseRepository);

  var _super = _createSuper(ProductDeviceDatabaseRepository);

  function ProductDeviceDatabaseRepository(database) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProductDeviceDatabaseRepository);
    _this = _super.call(this, database, _collectionNames["default"].PRODUCT_DEVICES);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_database", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_collectionName", _collectionNames["default"].PRODUCT_DEVICES);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "countByProductID", function (productID) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _this._database.count(_this._collectionName, _objectSpread(_objectSpread({}, query), {}, {
        productID: productID
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "create", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(model) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this._database.insertOne(_this._collectionName, _objectSpread({}, model)));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "deleteByID", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this._database.remove(_this._collectionName, {
                  _id: id
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var _context3;

      var userID,
          query,
          _args3 = arguments;
      return _regenerator["default"].wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userID = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
              // TODO - this should probably just query the organization
              query = userID ? {
                ownerID: userID
              } : {};
              return _context4.abrupt("return", (0, _find["default"])(_context3 = _this._database).call(_context3, _this._collectionName, query));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getAllByProductID", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productID, skip, take) {
        var _context5;

        return _regenerator["default"].wrap(function _callee4$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", (0, _find["default"])(_context5 = _this._database).call(_context5, _this._collectionName, {
                  productID: productID,
                  skip: skip,
                  take: take
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x3, _x4, _x5) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getManyByProductID", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(productID, query) {
        var _context7;

        return _regenerator["default"].wrap(function _callee5$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", (0, _find["default"])(_context7 = _this._database).call(_context7, _this._collectionName, _objectSpread(_objectSpread({}, query), {}, {
                  productID: productID
                })));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6, _x7) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByID", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", _this._database.findOne(_this._collectionName, {
                  _id: id
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x8) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getFromDeviceID", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(deviceID) {
        return _regenerator["default"].wrap(function _callee7$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", _this._database.findOne(_this._collectionName, {
                  deviceID: deviceID.toLowerCase()
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x9) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getManyFromDeviceIDs", /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(deviceIDs) {
        var _context11;

        return _regenerator["default"].wrap(function _callee8$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", // todo  $in operator doesn't work for neDb(no matter with regexp or plain strings)
                (0, _find["default"])(_context11 = _this._database).call(_context11, _this._collectionName, {
                  deviceID: {
                    $in: (0, _map["default"])(deviceIDs).call(deviceIDs, function (id) {
                      return id.toLowerCase();
                    })
                  }
                }));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x10) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateByID", /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(productDeviceID, productDevice) {
        return _regenerator["default"].wrap(function _callee9$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", _this._database.findAndModify(_this._collectionName, {
                  _id: productDeviceID
                }, {
                  $set: _objectSpread(_objectSpread({}, productDevice), productDevice.deviceID ? {
                    deviceID: productDevice.deviceID.toLowerCase()
                  } : {})
                }));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x11, _x12) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "deleteByProductID", /*#__PURE__*/function () {
      var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(productID) {
        return _regenerator["default"].wrap(function _callee10$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", _this._database.remove(_this._collectionName, {
                  product_id: productID
                }));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x13) {
        return _ref10.apply(this, arguments);
      };
    }());
    _this._database = database;
    return _this;
  }

  return ProductDeviceDatabaseRepository;
}(_BaseRepository2["default"]);

var _default = ProductDeviceDatabaseRepository;
exports["default"] = _default;