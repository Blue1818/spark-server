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

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

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

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _excluded = ["data"],
    _excluded2 = ["data"];

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context6; _forEachInstanceProperty(_context6 = ownKeys(Object(source))).call(_context6, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductFirmwaresControllerV2 = (_dec = (0, _httpVerb["default"])('get'), _dec2 = (0, _route["default"])('/v2/products/:productIDOrSlug/firmwares/count'), _dec3 = (0, _httpVerb["default"])('get'), _dec4 = (0, _route["default"])('/v2/products/:productIDOrSlug/firmwares'), _dec5 = (0, _httpVerb["default"])('get'), _dec6 = (0, _route["default"])('/v2/products/:productIDOrSlug/firmwares/:firmwareID'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(ProductFirmwaresControllerV2, _Controller);

  var _super = _createSuper(ProductFirmwaresControllerV2);

  function ProductFirmwaresControllerV2(deviceManager, productDeviceRepository, productFirmwareRepository, productRepository) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProductFirmwaresControllerV2);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deviceManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productDeviceRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productFirmwareRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productRepository", void 0);
    _this._deviceManager = deviceManager;
    _this._productDeviceRepository = productDeviceRepository;
    _this._productFirmwareRepository = productFirmwareRepository;
    _this._productRepository = productRepository;
    return _this;
  }

  (0, _createClass2["default"])(ProductFirmwaresControllerV2, [{
    key: "countFirmwares",
    value: function () {
      var _countFirmwares = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(productIDOrSlug) {
        var product, count;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context.sent;

                if (product) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 5:
                _context.next = 7;
                return this._productFirmwareRepository.countByProductID(product.product_id);

              case 7:
                count = _context.sent;
                return _context.abrupt("return", this.ok(count));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function countFirmwares(_x) {
        return _countFirmwares.apply(this, arguments);
      }

      return countFirmwares;
    }()
  }, {
    key: "getFirmwares",
    value: function () {
      var _getFirmwares = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(productIDOrSlug) {
        var _this2 = this;

        var _this$request$query, skip, take, product, firmwares, mappedFirmware;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$request$query = this.request.query, skip = _this$request$query.skip, take = _this$request$query.take;
                _context3.next = 3;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 3:
                product = _context3.sent;

                if (product) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", this.bad('Product does not exist', 404));

              case 6:
                _context3.next = 8;
                return this._productFirmwareRepository.getManyByProductID(product.product_id, {
                  skip: skip,
                  take: take
                });

              case 8:
                firmwares = _context3.sent;
                _context3.next = 11;
                return _promise["default"].all( // eslint-disable-next-line no-unused-vars, flowtype/require-return-type, flowtype/require-parameter-type
                (0, _map["default"])(firmwares).call(firmwares, /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref) {
                    var data, firmware, deviceCount;
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            data = _ref.data, firmware = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
                            _context2.next = 3;
                            return _this2._productDeviceRepository.countByProductID(product.product_id, {
                              productFirmwareVersion: firmware.version
                            });

                          case 3:
                            deviceCount = _context2.sent;
                            return _context2.abrupt("return", _objectSpread(_objectSpread({}, firmware), {}, {
                              device_count: deviceCount
                            }));

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 11:
                mappedFirmware = _context3.sent;
                return _context3.abrupt("return", this.ok(mappedFirmware));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getFirmwares(_x2) {
        return _getFirmwares.apply(this, arguments);
      }

      return getFirmwares;
    }()
  }, {
    key: "getFirmware",
    value: function () {
      var _getFirmware = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productIDOrSlug, firmwareID) {
        var product, firmware, deviceCount, data, restFirmware;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context4.sent;

                if (product) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 5:
                _context4.next = 7;
                return this._productFirmwareRepository.getByID(firmwareID);

              case 7:
                firmware = _context4.sent;

                if (firmware) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", this.bad("Firmware ".concat(firmwareID, " doesn't exist.")));

              case 10:
                _context4.next = 12;
                return this._productDeviceRepository.countByProductID(product.product_id, {
                  productFirmwareVersion: firmware.version
                });

              case 12:
                deviceCount = _context4.sent;
                // eslint-disable-next-line no-unused-vars
                data = firmware.data, restFirmware = (0, _objectWithoutProperties2["default"])(firmware, _excluded2);
                return _context4.abrupt("return", this.ok(_objectSpread(_objectSpread({}, restFirmware), {}, {
                  device_count: deviceCount
                })));

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getFirmware(_x4, _x5) {
        return _getFirmware.apply(this, arguments);
      }

      return getFirmware;
    }()
  }]);
  return ProductFirmwaresControllerV2;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "countFirmwares", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "countFirmwares"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getFirmwares", [_dec3, _dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getFirmwares"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getFirmware", [_dec5, _dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getFirmware"), _class.prototype)), _class));
var _default = ProductFirmwaresControllerV2;
exports["default"] = _default;