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

var _isNan = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/is-nan"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context14; _forEachInstanceProperty(_context14 = ownKeys(Object(source), true)).call(_context14, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context15; _forEachInstanceProperty(_context15 = ownKeys(Object(source))).call(_context15, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductDatabaseRepository = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(ProductDatabaseRepository, _BaseRepository);

  var _super = _createSuper(ProductDatabaseRepository);

  function ProductDatabaseRepository(database) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProductDatabaseRepository);
    _this = _super.call(this, database, _collectionNames["default"].PRODUCTS);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_database", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_collectionName", _collectionNames["default"].PRODUCTS);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "create", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(model) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _this._database;
                _context.t1 = _this._collectionName;
                _context.t2 = _objectSpread;
                _context.t3 = _objectSpread;
                _context.t4 = {};
                _context.next = 7;
                return _this._formatProduct(model);

              case 7:
                _context.t5 = _context.sent;
                _context.t6 = (0, _context.t3)(_context.t4, _context.t5);
                _context.t7 = {};
                _context.t8 = new Date();
                _context.next = 13;
                return _this._database.count(_this._collectionName);

              case 13:
                _context.t9 = _context.sent;
                _context.t10 = _context.t9 + 1;
                _context.t11 = {
                  created_at: _context.t8,
                  product_id: _context.t10
                };
                _context.t12 = (0, _context.t2)(_context.t6, _context.t7, _context.t11);
                return _context.abrupt("return", _context.t0.insertOne.call(_context.t0, _context.t1, _context.t12));

              case 18:
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getMany", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var _context3;

      var userID,
          query,
          userQuery,
          _args3 = arguments;
      return _regenerator["default"].wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userID = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
              query = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              // TODO - this should probably just query the organization
              userQuery = userID ? {
                ownerID: userID
              } : {};
              return _context4.abrupt("return", (0, _find["default"])(_context3 = _this._database).call(_context3, _this._collectionName, _objectSpread(_objectSpread({}, query), userQuery)));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var _context5;

      var userID,
          query,
          _args4 = arguments;
      return _regenerator["default"].wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              userID = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : null;
              // TODO - this should probably just query the organization
              query = userID ? {
                ownerID: userID
              } : {};
              return _context6.abrupt("return", (0, _find["default"])(_context5 = _this._database).call(_context5, _this._collectionName, query));

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByID", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", _this._database.findOne(_this._collectionName, {
                  _id: id
                }));

              case 1:
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByIDOrSlug", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(productIDOrSlug) {
        return _regenerator["default"].wrap(function _callee6$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _this._database.findOne(_this._collectionName, {
                  $or: [{
                    product_id: !(0, _isNan["default"])(productIDOrSlug) ? (0, _parseInt2["default"])(productIDOrSlug, 10) : null
                  }, {
                    slug: productIDOrSlug
                  }]
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateByID", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, product) {
        return _regenerator["default"].wrap(function _callee7$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.t0 = _this._database;
                _context9.t1 = _this._collectionName;
                _context9.t2 = {
                  _id: id
                };
                _context9.t3 = _objectSpread;
                _context9.t4 = {};
                _context9.next = 7;
                return _this._formatProduct(product);

              case 7:
                _context9.t5 = _context9.sent;
                _context9.t6 = (0, _context9.t3)(_context9.t4, _context9.t5);
                _context9.t7 = {
                  $set: _context9.t6
                };
                return _context9.abrupt("return", _context9.t0.findAndModify.call(_context9.t0, _context9.t1, _context9.t2, _context9.t7));

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x5, _x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_formatProduct", /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(product) {
        var _context10, _context11, _context12;

        var slug, existingProduct;
        return _regenerator["default"].wrap(function _callee8$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                slug = (0, _concat["default"])(_context10 = "".concat((0, _trim["default"])(_context11 = product.name).call(_context11), " ")).call(_context10, (0, _trim["default"])(_context12 = product.hardware_version).call(_context12)).toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w-]+/g, '') // Remove all non-word chars
                .replace(/--+/g, '-') // Replace multiple - with single -
                .replace(/^-+/, '') // Trim - from start of text
                .replace(/-+$/, ''); // Trim - from end of text

                _context13.next = 3;
                return _this._database.findOne(_this._collectionName, {
                  slug: slug
                });

              case 3:
                existingProduct = _context13.sent;

                if (!(existingProduct && existingProduct.product_id !== product.product_id)) {
                  _context13.next = 6;
                  break;
                }

                throw new Error('Product name or version already in use');

              case 6:
                return _context13.abrupt("return", _objectSpread(_objectSpread({}, product), {}, {
                  slug: slug
                }));

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    _this._database = database;
    return _this;
  }

  return ProductDatabaseRepository;
}(_BaseRepository2["default"]);

var _default = ProductDatabaseRepository;
exports["default"] = _default;