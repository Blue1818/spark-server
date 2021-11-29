"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

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

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

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

var _allowUpload = _interopRequireDefault(require("../decorators/allowUpload"));

var _binaryVersionReader = require("binary-version-reader");

var _csv = _interopRequireDefault(require("csv"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _deviceToAPI = _interopRequireDefault(require("../lib/deviceToAPI"));

var _excluded = ["deviceID"],
    _excluded2 = ["product_id"];

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context12; _forEachInstanceProperty(_context12 = ownKeys(Object(source), true)).call(_context12, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context13; _forEachInstanceProperty(_context13 = ownKeys(Object(source))).call(_context13, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductsControllerV2 = (_dec = (0, _httpVerb["default"])('get'), _dec2 = (0, _route["default"])('/v2/products/count'), _dec3 = (0, _httpVerb["default"])('get'), _dec4 = (0, _route["default"])('/v2/products'), _dec5 = (0, _httpVerb["default"])('post'), _dec6 = (0, _route["default"])('/v2/products'), _dec7 = (0, _httpVerb["default"])('get'), _dec8 = (0, _route["default"])('/v2/products/:productIDOrSlug'), _dec9 = (0, _httpVerb["default"])('put'), _dec10 = (0, _route["default"])('/v2/products/:productIDOrSlug'), _dec11 = (0, _httpVerb["default"])('get'), _dec12 = (0, _route["default"])('/v2/products/:productIDOrSlug/devices/count'), _dec13 = (0, _httpVerb["default"])('get'), _dec14 = (0, _route["default"])('/v2/products/:productIDOrSlug/devices'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(ProductsControllerV2, _Controller);

  var _super = _createSuper(ProductsControllerV2);

  function ProductsControllerV2(deviceManager, deviceAttributeRepository, organizationRepository, productRepository, productConfigRepository, productDeviceRepository, productFirmwareRepository) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProductsControllerV2);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deviceAttributeRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deviceManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_organizationRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productConfigRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productDeviceRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productFirmwareRepository", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_productRepository", void 0);
    _this._deviceManager = deviceManager;
    _this._deviceAttributeRepository = deviceAttributeRepository;
    _this._organizationRepository = organizationRepository;
    _this._productConfigRepository = productConfigRepository;
    _this._productDeviceRepository = productDeviceRepository;
    _this._productFirmwareRepository = productFirmwareRepository;
    _this._productRepository = productRepository;
    return _this;
  }

  (0, _createClass2["default"])(ProductsControllerV2, [{
    key: "countProducts",
    value: function () {
      var _countProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var count;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._productRepository.count();

              case 2:
                count = _context.sent;
                return _context.abrupt("return", this.ok(count));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function countProducts() {
        return _countProducts.apply(this, arguments);
      }

      return countProducts;
    }()
  }, {
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this2 = this;

        var _this$request$query, skip, take, products;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$request$query = this.request.query, skip = _this$request$query.skip, take = _this$request$query.take;
                _context2.next = 3;
                return this._productRepository.getMany(null, {
                  skip: skip,
                  take: take
                });

              case 3:
                products = _context2.sent;
                return _context2.abrupt("return", this.ok((0, _map["default"])(products).call(products, function (product) {
                  return _this2._formatProduct(product);
                })));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getProducts() {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "createProduct",
    value: function () {
      var _createProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(productModel) {
        var _context3;

        var missingFields, organizations, organizationID, product, config;
        return _regenerator["default"].wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (productModel) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", this.bad('You must provide a product'));

              case 2:
                missingFields = (0, _filter["default"])(_context3 = ['description', 'hardware_version', 'name', 'platform_id', 'type']).call(_context3, function (key) {
                  return !productModel[key] && productModel[key] !== 0;
                });

                if (!missingFields.length) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", this.bad("Missing fields: ".concat(missingFields.join(', '))));

              case 5:
                _context4.next = 7;
                return this._organizationRepository.getByUserID(this.user.id);

              case 7:
                organizations = _context4.sent;

                if (organizations.length) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", this.bad("You don't have access to any organizations"));

              case 10:
                organizationID = organizations[0].id;
                productModel.organization = organizationID;
                _context4.next = 14;
                return this._productRepository.create(productModel);

              case 14:
                product = _context4.sent;
                _context4.next = 17;
                return this._productConfigRepository.create({
                  org_id: organizationID,
                  product_id: product.id
                });

              case 17:
                config = _context4.sent;
                product.config_id = config.id;
                _context4.next = 21;
                return this._productRepository.updateByID(product.id, product);

              case 21:
                return _context4.abrupt("return", this.ok(this._formatProduct(product)));

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));

      function createProduct(_x) {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }()
  }, {
    key: "getProduct",
    value: function () {
      var _getProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productIDOrSlug) {
        var product;
        return _regenerator["default"].wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context5.sent;

                if (product) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", this.bad('Product does not exist', 404));

              case 5:
                return _context5.abrupt("return", this.ok(this._formatProduct(product)));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, this);
      }));

      function getProduct(_x2) {
        return _getProduct.apply(this, arguments);
      }

      return getProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(productIDOrSlug, productModel) {
        var _context6;

        var missingFields, product;
        return _regenerator["default"].wrap(function _callee5$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (productModel) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return", this.bad('You must provide a product'));

              case 2:
                missingFields = (0, _filter["default"])(_context6 = ['config_id', 'description', 'hardware_version', 'id', 'name', 'organization', 'platform_id', 'type']).call(_context6, function (key) {
                  return !productModel[key] && productModel[key] !== 0;
                });

                if (!missingFields.length) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", this.bad("Missing fields: ".concat(missingFields.join(', '))));

              case 5:
                _context7.next = 7;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 7:
                product = _context7.sent;

                if (product) {
                  _context7.next = 10;
                  break;
                }

                return _context7.abrupt("return", this.bad("Product ".concat(productIDOrSlug, " doesn't exist")));

              case 10:
                _context7.next = 12;
                return this._productRepository.updateByID(product.id, _objectSpread(_objectSpread({}, product), productModel));

              case 12:
                product = _context7.sent;
                return _context7.abrupt("return", this.ok(this._formatProduct(product)));

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateProduct(_x3, _x4) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }, {
    key: "countDevices",
    value: function () {
      var _countDevices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(productIDOrSlug) {
        var product, count;
        return _regenerator["default"].wrap(function _callee6$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context8.sent;

                if (product) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 5:
                _context8.next = 7;
                return this._productDeviceRepository.countByProductID(product.product_id);

              case 7:
                count = _context8.sent;
                return _context8.abrupt("return", this.ok(count));

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee6, this);
      }));

      function countDevices(_x5) {
        return _countDevices.apply(this, arguments);
      }

      return countDevices;
    }()
  }, {
    key: "getDevices",
    value: function () {
      var _getDevices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(productIDOrSlug) {
        var _this$request$query2, skip, take, product, productDevices, deviceIDs, deviceAttributesList, devices;

        return _regenerator["default"].wrap(function _callee7$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$request$query2 = this.request.query, skip = _this$request$query2.skip, take = _this$request$query2.take;
                _context9.next = 3;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 3:
                product = _context9.sent;

                if (product) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 6:
                _context9.next = 8;
                return this._productDeviceRepository.getManyByProductID(product.product_id, {
                  skip: skip,
                  take: take
                });

              case 8:
                productDevices = _context9.sent;
                deviceIDs = (0, _map["default"])(productDevices).call(productDevices, function (productDevice) {
                  return productDevice.deviceID;
                });
                _context9.next = 12;
                return this._deviceAttributeRepository.getManyFromIDs(deviceIDs);

              case 12:
                deviceAttributesList = _context9.sent;
                devices = (0, _map["default"])(productDevices).call(productDevices, function (_ref) {
                  var deviceID = _ref.deviceID,
                      other = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
                  var deviceAttributes = (0, _find["default"])(deviceAttributesList).call(deviceAttributesList, function (item) {
                    return deviceID === item.deviceID;
                  });
                  return _objectSpread(_objectSpread(_objectSpread({}, (0, _deviceToAPI["default"])(deviceAttributes)), other), {}, {
                    id: deviceID,
                    product_id: product.product_id
                  });
                });
                return _context9.abrupt("return", this.ok(devices));

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee7, this);
      }));

      function getDevices(_x6) {
        return _getDevices.apply(this, arguments);
      }

      return getDevices;
    }()
  }, {
    key: "_formatProduct",
    value: function _formatProduct(product) {
      var product_id = product.product_id,
          output = (0, _objectWithoutProperties2["default"])(product, _excluded2);
      output.id = product_id;
      return output;
    }
  }, {
    key: "_findAndUnreleaseCurrentFirmware",
    value: function _findAndUnreleaseCurrentFirmware(productFirmwareList) {
      var _context10,
          _this3 = this;

      return _promise["default"].all((0, _map["default"])(_context10 = (0, _filter["default"])(productFirmwareList).call(productFirmwareList, function (firmware) {
        return firmware.current === true;
      })).call(_context10, function (releasedFirmware) {
        return _this3._productFirmwareRepository.updateByID(releasedFirmware.id, _objectSpread(_objectSpread({}, releasedFirmware), {}, {
          current: false
        }));
      }));
    }
  }, {
    key: "_stringToBoolean",
    value: function _stringToBoolean(input) {
      var _context11;

      if (input === true || input === false) {
        return input;
      }

      switch ((0, _trim["default"])(_context11 = input.toLowerCase()).call(_context11)) {
        case 'true':
        case 'yes':
        case '1':
          return true;

        case 'false':
        case 'no':
        case '0':
        case null:
          return false;

        default:
          return Boolean(input);
      }
    }
  }]);
  return ProductsControllerV2;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "countProducts", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "countProducts"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getProducts", [_dec3, _dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getProducts"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createProduct", [_dec5, _dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "createProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getProduct", [_dec7, _dec8], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updateProduct", [_dec9, _dec10], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "updateProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "countDevices", [_dec11, _dec12], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "countDevices"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getDevices", [_dec13, _dec14], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getDevices"), _class.prototype)), _class));
var _default = ProductsControllerV2;
/* eslint-enable */

exports["default"] = _default;