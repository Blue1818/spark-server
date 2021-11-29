"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _collectionNames = _interopRequireDefault(require("./collectionNames"));

var _BaseRepository2 = _interopRequireDefault(require("./BaseRepository"));

var _logger = _interopRequireDefault(require("../lib/logger"));

var _excluded = ["data"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context14; _forEachInstanceProperty(_context14 = ownKeys(Object(source), true)).call(_context14, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context15; _forEachInstanceProperty(_context15 = ownKeys(Object(source))).call(_context15, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var logger = _logger["default"].createModuleLogger(module);

var formatProductFirmwareFromDb = function formatProductFirmwareFromDb(productFirmware) {
  return _objectSpread(_objectSpread({}, productFirmware), {}, {
    // todo right now its hack for getting right buffer from different dbs
    data: productFirmware.data.buffer ? productFirmware.data.buffer // for mongo
    : Buffer.from((0, _values["default"])(productFirmware.data)) // for nedb,

  });
};

var ProductFirmwareDatabaseRepository = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(ProductFirmwareDatabaseRepository, _BaseRepository);

  var _super = _createSuper(ProductFirmwareDatabaseRepository);

  function ProductFirmwareDatabaseRepository(database) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProductFirmwareDatabaseRepository);
    _this = _super.call(this, database, _collectionNames["default"].PRODUCT_FIRMWARE);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_database", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_collectionName", _collectionNames["default"].PRODUCT_FIRMWARE);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "countByProductID", function (productID) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _this._database.count(_this._collectionName, _objectSpread(_objectSpread({}, query), {}, {
        product_id: productID
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "create", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(model) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this._database.insertOne(_this._collectionName, _objectSpread(_objectSpread({}, model), {}, {
                  updated_at: new Date()
                })));

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
      var _context3, _context4;

      var userID,
          query,
          _args3 = arguments;
      return _regenerator["default"].wrap(function _callee3$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userID = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
              // TODO - this should probably just query the organization
              query = userID ? {
                ownerID: userID
              } : {};
              _context5.t0 = _map["default"];
              _context5.next = 5;
              return (0, _find["default"])(_context4 = _this._database).call(_context4, _this._collectionName, query);

            case 5:
              _context5.t1 = _context3 = _context5.sent;
              return _context5.abrupt("return", (0, _context5.t0)(_context5.t1).call(_context3, formatProductFirmwareFromDb));

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee3);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getManyByProductID", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productID, query) {
        var _context6, _context7;

        return _regenerator["default"].wrap(function _callee4$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.t0 = _map["default"];
                _context8.next = 3;
                return (0, _find["default"])(_context7 = _this._database).call(_context7, _this._collectionName, _objectSpread(_objectSpread({}, query), {}, {
                  product_id: productID
                }));

              case 3:
                _context8.t1 = _context6 = _context8.sent;
                return _context8.abrupt("return", (0, _context8.t0)(_context8.t1).call(_context6, formatProductFirmwareFromDb));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByVersionForProduct", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(productID, version) {
        var productFirmware;
        return _regenerator["default"].wrap(function _callee5$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this._database.findOne(_this._collectionName, {
                  product_id: productID,
                  version: version
                });

              case 2:
                productFirmware = _context9.sent;
                return _context9.abrupt("return", productFirmware ? formatProductFirmwareFromDb(productFirmware) : null);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCurrentForProduct", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(productID) {
        var productFirmware;
        return _regenerator["default"].wrap(function _callee6$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this._database.findOne(_this._collectionName, {
                  current: true,
                  product_id: productID
                });

              case 2:
                productFirmware = _context10.sent;
                return _context10.abrupt("return", productFirmware ? formatProductFirmwareFromDb(productFirmware) : null);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x7) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByID", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
        var productFirmware;
        return _regenerator["default"].wrap(function _callee7$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _this._database.findOne(_this._collectionName, {
                  _id: id
                });

              case 2:
                productFirmware = _context11.sent;
                return _context11.abrupt("return", productFirmware ? formatProductFirmwareFromDb(productFirmware) : null);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x8) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateByID", /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(productFirmwareID, productFirmware) {
        var data, loggingProps;
        return _regenerator["default"].wrap(function _callee8$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                data = productFirmware.data, loggingProps = (0, _objectWithoutProperties2["default"])(productFirmware, _excluded);
                logger.info(loggingProps, 'Update Product Firmware');
                return _context12.abrupt("return", _this._database.findAndModify(_this._collectionName, {
                  _id: productFirmwareID
                }, {
                  $set: _objectSpread(_objectSpread({}, productFirmware), {}, {
                    data: (0, _toConsumableArray2["default"])(productFirmware.data),
                    updated_at: new Date()
                  })
                }).then(formatProductFirmwareFromDb));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x9, _x10) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "deleteByProductID", /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(productID) {
        return _regenerator["default"].wrap(function _callee9$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", _this._database.remove(_this._collectionName, {
                  product_id: productID
                }));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x11) {
        return _ref9.apply(this, arguments);
      };
    }());
    _this._database = database;
    return _this;
  }

  return ProductFirmwareDatabaseRepository;
}(_BaseRepository2["default"]);

var _default = ProductFirmwareDatabaseRepository;
exports["default"] = _default;