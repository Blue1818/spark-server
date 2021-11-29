"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor2 = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _endsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/ends-with"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _some = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/some"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

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

var _csv = _interopRequireDefault(require("csv"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _deviceToAPI = _interopRequireDefault(require("../lib/deviceToAPI"));

var _excluded = ["deviceID"],
    _excluded2 = ["product_id"];

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context20; _forEachInstanceProperty2(_context20 = ownKeys(Object(source), true)).call(_context20, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context21; _forEachInstanceProperty2(_context21 = ownKeys(Object(source))).call(_context21, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductsController = (_dec = (0, _httpVerb["default"])('get'), _dec2 = (0, _route["default"])('/v1/products'), _dec3 = (0, _httpVerb["default"])('post'), _dec4 = (0, _route["default"])('/v1/products'), _dec5 = (0, _httpVerb["default"])('get'), _dec6 = (0, _route["default"])('/v1/products/:productIDOrSlug'), _dec7 = (0, _httpVerb["default"])('put'), _dec8 = (0, _route["default"])('/v1/products/:productIDOrSlug'), _dec9 = (0, _httpVerb["default"])('delete'), _dec10 = (0, _route["default"])('/v1/products/:productIDOrSlug'), _dec11 = (0, _httpVerb["default"])('get'), _dec12 = (0, _route["default"])('/v1/products/:productIDOrSlug/config'), _dec13 = (0, _httpVerb["default"])('get'), _dec14 = (0, _route["default"])('/v1/products/:productIDOrSlug/devices'), _dec15 = (0, _httpVerb["default"])('get'), _dec16 = (0, _route["default"])('/v1/products/:productIDOrSlug/devices/:deviceIDorName'), _dec17 = (0, _httpVerb["default"])('post'), _dec18 = (0, _route["default"])('/v1/products/:productIDOrSlug/devices'), _dec19 = (0, _allowUpload["default"])('file', 1), _dec20 = (0, _httpVerb["default"])('put'), _dec21 = (0, _route["default"])('/v1/products/:productIDOrSlug/devices/:deviceIDorName'), _dec22 = (0, _httpVerb["default"])('delete'), _dec23 = (0, _route["default"])('/v1/products/:productIDOrSlug/devices/:deviceIDorName'), _dec24 = (0, _httpVerb["default"])('get'), _dec25 = (0, _route["default"])('/v1/products/:productIdOrSlug/events/:eventPrefix?*'), _dec26 = (0, _httpVerb["default"])('delete'), _dec27 = (0, _route["default"])('/v1/products/:productIdOrSlug/team/:username'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(ProductsController, _Controller);

  var _super = _createSuper(ProductsController);

  function ProductsController(deviceManager, deviceAttributeRepository, organizationRepository, productRepository, productConfigRepository, productDeviceRepository, productFirmwareRepository) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProductsController);
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

  (0, _createClass2["default"])(ProductsController, [{
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;

        var products;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._productRepository.getAll();

              case 2:
                products = _context.sent;
                return _context.abrupt("return", this.ok({
                  products: (0, _map["default"])(products).call(products, function (product) {
                    return _this2._formatProduct(product);
                  })
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProducts() {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "createProduct",
    value: function () {
      var _createProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(model) {
        var _context2;

        var missingFields, organizations, organizationID, product, config;
        return _regenerator["default"].wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (model.product) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", this.bad('You must provide a product'));

              case 2:
                missingFields = (0, _filter["default"])(_context2 = ['description', 'hardware_version', 'name', 'platform_id', 'type']).call(_context2, function (key) {
                  return !model.product[key] && model.product[key] !== 0;
                });

                if (!missingFields.length) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", this.bad("Missing fields: ".concat(missingFields.join(', '))));

              case 5:
                _context3.next = 7;
                return this._organizationRepository.getByUserID(this.user.id);

              case 7:
                organizations = _context3.sent;

                if (organizations.length) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", this.bad("You don't have access to any organizations"));

              case 10:
                organizationID = organizations[0].id;
                model.product.organization = organizationID;
                _context3.next = 14;
                return this._productRepository.create(model.product);

              case 14:
                product = _context3.sent;
                _context3.next = 17;
                return this._productConfigRepository.create({
                  org_id: organizationID,
                  product_id: product.id
                });

              case 17:
                config = _context3.sent;
                product.config_id = config.id;
                _context3.next = 21;
                return this._productRepository.updateByID(product.id, product);

              case 21:
                return _context3.abrupt("return", this.ok({
                  product: [this._formatProduct(product)]
                }));

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this);
      }));

      function createProduct(_x) {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }()
  }, {
    key: "getProduct",
    value: function () {
      var _getProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(productIDOrSlug) {
        var product;
        return _regenerator["default"].wrap(function _callee3$(_context4) {
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

                return _context4.abrupt("return", this.bad('Product does not exist', 404));

              case 5:
                return _context4.abrupt("return", this.ok({
                  product: [this._formatProduct(product)]
                }));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));

      function getProduct(_x2) {
        return _getProduct.apply(this, arguments);
      }

      return getProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productIDOrSlug, model) {
        var _context5;

        var missingFields, product;
        return _regenerator["default"].wrap(function _callee4$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (model.product) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return", this.bad('You must provide a product'));

              case 2:
                missingFields = (0, _filter["default"])(_context5 = ['config_id', 'description', 'hardware_version', 'id', 'name', 'organization', 'platform_id', 'type']).call(_context5, function (key) {
                  return !model.product[key] && model.product[key] !== 0;
                });

                if (!missingFields.length) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", this.bad("Missing fields: ".concat(missingFields.join(', '))));

              case 5:
                _context6.next = 7;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 7:
                product = _context6.sent;

                if (product) {
                  _context6.next = 10;
                  break;
                }

                return _context6.abrupt("return", this.bad("Product ".concat(productIDOrSlug, " doesn't exist")));

              case 10:
                _context6.next = 12;
                return this._productRepository.updateByID(product.id, _objectSpread(_objectSpread({}, product), model.product));

              case 12:
                product = _context6.sent;
                return _context6.abrupt("return", this.ok({
                  product: [this._formatProduct(product)]
                }));

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateProduct(_x3, _x4) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(productIDOrSlug) {
        var product;
        return _regenerator["default"].wrap(function _callee5$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context7.sent;

                if (product) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", this.bad('Product does not exist', 404));

              case 5:
                _context7.next = 7;
                return this._productRepository.deleteByID(product.id);

              case 7:
                _context7.next = 9;
                return this._productFirmwareRepository.deleteByProductID(product.id);

              case 9:
                _context7.next = 11;
                return this._productDeviceRepository.deleteByProductID(product.id);

              case 11:
                return _context7.abrupt("return", this.ok());

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteProduct(_x5) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }, {
    key: "getConfig",
    value: function () {
      var _getConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(productIDOrSlug) {
        var product, config;
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

                return _context8.abrupt("return", this.bad('Product does not exist', 404));

              case 5:
                _context8.next = 7;
                return this._productConfigRepository.getByProductID(product.product_id);

              case 7:
                config = _context8.sent;
                return _context8.abrupt("return", this.ok({
                  product_configuration: config
                }));

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee6, this);
      }));

      function getConfig(_x6) {
        return _getConfig.apply(this, arguments);
      }

      return getConfig;
    }()
  }, {
    key: "getDevices",
    value: function () {
      var _getDevices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(productIDOrSlug) {
        var _this$request$query, page, _this$request$query$p, page_size, product, totalDevices, productDevices, deviceIDs, deviceAttributesList, devices;

        return _regenerator["default"].wrap(function _callee7$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$request$query = this.request.query, page = _this$request$query.page, _this$request$query$p = _this$request$query.page_size, page_size = _this$request$query$p === void 0 ? '25' : _this$request$query$p;
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
                return this._productDeviceRepository.count({
                  productID: product.product_id
                });

              case 8:
                totalDevices = _context9.sent;
                _context9.next = 11;
                return this._productDeviceRepository.getManyByProductID(product.product_id, {
                  skip: Math.max(1, page) - 1,
                  take: (0, _parseInt2["default"])(page_size, 10)
                });

              case 11:
                productDevices = _context9.sent;
                deviceIDs = (0, _map["default"])(productDevices).call(productDevices, function (productDevice) {
                  return productDevice.deviceID;
                });
                _context9.next = 15;
                return this._deviceAttributeRepository.getManyFromIDs(deviceIDs);

              case 15:
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
                return _context9.abrupt("return", this.ok({
                  accounts: [],
                  devices: devices,
                  meta: {
                    total_pages: Math.ceil(totalDevices / (0, _parseInt2["default"])(page_size, 10))
                  }
                }));

              case 18:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee7, this);
      }));

      function getDevices(_x7) {
        return _getDevices.apply(this, arguments);
      }

      return getDevices;
    }()
  }, {
    key: "getSingleDevice",
    value: function () {
      var _getSingleDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(productIDOrSlug, deviceIDorName) {
        var deviceID, product, deviceAttributes, productDevice;
        return _regenerator["default"].wrap(function _callee8$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 2:
                deviceID = _context10.sent;
                _context10.next = 5;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 5:
                product = _context10.sent;

                if (product) {
                  _context10.next = 8;
                  break;
                }

                return _context10.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 8:
                _context10.next = 10;
                return this._deviceAttributeRepository.getByID(deviceID);

              case 10:
                deviceAttributes = _context10.sent;

                if (deviceAttributes) {
                  _context10.next = 13;
                  break;
                }

                return _context10.abrupt("return", this.bad("Device ".concat(deviceID, " doesn't exist.")));

              case 13:
                _context10.next = 15;
                return this._productDeviceRepository.getFromDeviceID(deviceID);

              case 15:
                productDevice = _context10.sent;

                if (productDevice) {
                  _context10.next = 18;
                  break;
                }

                return _context10.abrupt("return", this.bad("Device ".concat(deviceID, " hasn't been assigned to a product")));

              case 18:
                return _context10.abrupt("return", this.ok(_objectSpread(_objectSpread(_objectSpread({}, (0, _deviceToAPI["default"])(deviceAttributes)), productDevice), {}, {
                  product_id: product.product_id
                })));

              case 19:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee8, this);
      }));

      function getSingleDevice(_x8, _x9) {
        return _getSingleDevice.apply(this, arguments);
      }

      return getSingleDevice;
    }()
  }, {
    key: "addDevice",
    value: function () {
      var _addDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(productIDOrSlug, body) {
        var _context11,
            _context12,
            _context13,
            _this3 = this;

        var product, ids, file, originalname, records, deviceAttributes, incorrectPlatformDeviceIDs, existingProductDeviceIDs, invalidDeviceIds, deviceAttributeIDs, nonmemberDeviceIds, idsToCreate, createdProductDevices;
        return _regenerator["default"].wrap(function _callee9$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context14.sent;

                if (product) {
                  _context14.next = 5;
                  break;
                }

                return _context14.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 5:
                ids = [];

                if (!(body.import_method === 'many')) {
                  _context14.next = 23;
                  break;
                }

                file = body.file;

                if (file) {
                  _context14.next = 10;
                  break;
                }

                return _context14.abrupt("return", this.bad('No file uploaded'));

              case 10:
                originalname = file.originalname;

                if (!(!(0, _endsWith["default"])(originalname).call(originalname, '.txt') && !(0, _endsWith["default"])(originalname).call(originalname, '.csv'))) {
                  _context14.next = 13;
                  break;
                }

                return _context14.abrupt("return", this.bad('File must be csv or txt file.'));

              case 13:
                _context14.next = 15;
                return new _promise["default"](function (resolve, reject) {
                  return _csv["default"].parse(file.buffer.toString('utf8'), function (error, data) {
                    if (error) {
                      reject(error);
                    }

                    resolve(data);
                  });
                });

              case 15:
                records = _context14.sent;

                if (records.length) {
                  _context14.next = 18;
                  break;
                }

                return _context14.abrupt("return", this.bad("File didn't have any ids"));

              case 18:
                if (!(0, _some["default"])(records).call(records, function (record) {
                  return record.length !== 1;
                })) {
                  _context14.next = 20;
                  break;
                }

                return _context14.abrupt("return", this.bad('File should only have a single column of device ids'));

              case 20:
                ids = (0, _toConsumableArray2["default"])(records);
                _context14.next = 26;
                break;

              case 23:
                if (body.id) {
                  _context14.next = 25;
                  break;
                }

                return _context14.abrupt("return", this.bad('You must pass an id for a device'));

              case 25:
                ids = [body.id];

              case 26:
                ids = (0, _map["default"])(ids).call(ids, function (id) {
                  return id.toLowerCase();
                });
                _context14.next = 29;
                return this._deviceAttributeRepository.getManyFromIDs(ids);

              case 29:
                deviceAttributes = _context14.sent;
                incorrectPlatformDeviceIDs = (0, _map["default"])(_context11 = (0, _filter["default"])(deviceAttributes).call(deviceAttributes, function (deviceAttribute) {
                  return deviceAttribute.platformId !== undefined && deviceAttribute.platformId !== product.platform_id;
                })).call(_context11, function (deviceAttribute) {
                  return deviceAttribute.deviceID;
                });
                _context14.t0 = _map["default"];
                _context14.next = 34;
                return this._productDeviceRepository.getManyFromDeviceIDs(ids);

              case 34:
                _context14.t1 = _context12 = _context14.sent;
                existingProductDeviceIDs = (0, _context14.t0)(_context14.t1).call(_context12, function (productDevice) {
                  return productDevice.deviceID;
                });
                invalidDeviceIds = (0, _concat["default"])(_context13 = []).call(_context13, (0, _toConsumableArray2["default"])(incorrectPlatformDeviceIDs), (0, _toConsumableArray2["default"])(existingProductDeviceIDs));
                deviceAttributeIDs = (0, _map["default"])(deviceAttributes).call(deviceAttributes, function (deviceAttribute) {
                  return deviceAttribute.deviceID;
                });
                nonmemberDeviceIds = (0, _filter["default"])(ids).call(ids, function (id) {
                  return !(0, _includes["default"])(deviceAttributeIDs).call(deviceAttributeIDs, id);
                });

                if (!invalidDeviceIds.length) {
                  _context14.next = 41;
                  break;
                }

                return _context14.abrupt("return", {
                  data: {
                    updated: 0,
                    nonmemberDeviceIds: nonmemberDeviceIds,
                    invalidDeviceIds: invalidDeviceIds
                  },
                  status: 400
                });

              case 41:
                idsToCreate = (0, _filter["default"])(ids).call(ids, function (id) {
                  return !(0, _includes["default"])(invalidDeviceIds).call(invalidDeviceIds, id) && !(0, _includes["default"])(existingProductDeviceIDs).call(existingProductDeviceIDs, id);
                });
                _context14.next = 44;
                return _promise["default"].all((0, _map["default"])(idsToCreate).call(idsToCreate, function (id) {
                  return _this3._productDeviceRepository.create({
                    denied: false,
                    development: false,
                    deviceID: id,
                    lockedFirmwareVersion: null,
                    productFirmwareVersion: 65535,
                    productID: product.product_id,
                    quarantined: (0, _includes["default"])(nonmemberDeviceIds).call(nonmemberDeviceIds, id)
                  });
                }));

              case 44:
                createdProductDevices = _context14.sent;
                // flash devices
                (0, _forEach["default"])(createdProductDevices).call(createdProductDevices, function (productDevice) {
                  _this3._deviceManager.flashProductFirmware(productDevice.productID, productDevice.deviceID);
                });
                return _context14.abrupt("return", this.ok({
                  updated: idsToCreate.length,
                  nonmemberDeviceIds: nonmemberDeviceIds,
                  invalidDeviceIds: invalidDeviceIds
                }));

              case 47:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee9, this);
      }));

      function addDevice(_x10, _x11) {
        return _addDevice.apply(this, arguments);
      }

      return addDevice;
    }()
  }, {
    key: "updateProductDevice",
    value: function () {
      var _updateProductDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(productIDOrSlug, deviceIDorName, _ref2) {
        var denied, desired_firmware_version, development, notes, quarantined, deviceID, product, productDevice, shouldFlash, output, deviceFirmwares, parsedFirmware, updatedProductDevice;
        return _regenerator["default"].wrap(function _callee10$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                denied = _ref2.denied, desired_firmware_version = _ref2.desired_firmware_version, development = _ref2.development, notes = _ref2.notes, quarantined = _ref2.quarantined;
                _context15.next = 3;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 3:
                deviceID = _context15.sent;
                _context15.next = 6;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 6:
                product = _context15.sent;

                if (product) {
                  _context15.next = 9;
                  break;
                }

                return _context15.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 9:
                _context15.next = 11;
                return this._productDeviceRepository.getFromDeviceID(deviceID);

              case 11:
                productDevice = _context15.sent;

                if (productDevice) {
                  _context15.next = 14;
                  break;
                }

                return _context15.abrupt("return", this.bad("Device ".concat(deviceID, " is not associated with a product")));

              case 14:
                shouldFlash = false;
                output = {
                  id: productDevice.id,
                  updated_at: new Date()
                };

                if (!(desired_firmware_version !== undefined)) {
                  _context15.next = 26;
                  break;
                }

                _context15.next = 19;
                return this._productFirmwareRepository.getManyByProductID(product.product_id);

              case 19:
                deviceFirmwares = _context15.sent;
                parsedFirmware = desired_firmware_version !== null ? (0, _parseInt2["default"])(desired_firmware_version, 10) : null;

                if (!(parsedFirmware !== null && !(0, _find["default"])(deviceFirmwares).call(deviceFirmwares, function (firmware) {
                  return firmware.version === parsedFirmware;
                }))) {
                  _context15.next = 23;
                  break;
                }

                return _context15.abrupt("return", this.bad("Firmware version ".concat(parsedFirmware, " does not exist")));

              case 23:
                productDevice.lockedFirmwareVersion = parsedFirmware;
                output = _objectSpread(_objectSpread({}, output), {}, {
                  desired_firmware_version: desired_firmware_version
                });
                shouldFlash = true;

              case 26:
                if (notes !== undefined) {
                  productDevice.notes = notes;
                  output = _objectSpread(_objectSpread({}, output), {}, {
                    notes: notes
                  });
                }

                if (development !== undefined) {
                  productDevice.development = development;
                  output = _objectSpread(_objectSpread({}, output), {}, {
                    development: development
                  });
                }

                if (denied !== undefined) {
                  productDevice.denied = denied;
                  output = _objectSpread(_objectSpread({}, output), {}, {
                    denied: denied
                  });
                }

                if (quarantined !== undefined) {
                  productDevice.quarantined = quarantined;
                  output = _objectSpread(_objectSpread({}, output), {}, {
                    quarantined: quarantined
                  });
                  shouldFlash = true;
                }

                _context15.next = 32;
                return this._productDeviceRepository.updateByID(productDevice.id, productDevice);

              case 32:
                updatedProductDevice = _context15.sent;

                if (shouldFlash) {
                  this._deviceManager.flashProductFirmware(productDevice.productID, productDevice.deviceID);
                }

                return _context15.abrupt("return", this.ok(output));

              case 35:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateProductDevice(_x12, _x13, _x14) {
        return _updateProductDevice.apply(this, arguments);
      }

      return updateProductDevice;
    }()
  }, {
    key: "removeDeviceFromProduct",
    value: function () {
      var _removeDeviceFromProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(productIDOrSlug, deviceIDorName) {
        var deviceID, product, productDevice, _context16;

        return _regenerator["default"].wrap(function _callee11$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this._deviceManager.getDeviceID(deviceIDorName);

              case 2:
                deviceID = _context17.sent;
                _context17.next = 5;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 5:
                product = _context17.sent;

                if (product) {
                  _context17.next = 8;
                  break;
                }

                return _context17.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 8:
                _context17.next = 10;
                return this._productDeviceRepository.getFromDeviceID(deviceID);

              case 10:
                productDevice = _context17.sent;

                if (productDevice) {
                  _context17.next = 13;
                  break;
                }

                return _context17.abrupt("return", this.bad((0, _concat["default"])(_context16 = "Device ".concat(deviceID, " was not mapped to ")).call(_context16, productIDOrSlug)));

              case 13:
                _context17.next = 15;
                return this._productDeviceRepository.deleteByID(productDevice.id);

              case 15:
                return _context17.abrupt("return", this.ok());

              case 16:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee11, this);
      }));

      function removeDeviceFromProduct(_x15, _x16) {
        return _removeDeviceFromProduct.apply(this, arguments);
      }

      return removeDeviceFromProduct;
    }()
  }, {
    key: "getEvents",
    value: function () {
      var _getEvents = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(productIdOrSlug, eventName) {
        return _regenerator["default"].wrap(function _callee12$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                throw new _HttpError["default"]('Not implemented');

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee12);
      }));

      function getEvents(_x17, _x18) {
        return _getEvents.apply(this, arguments);
      }

      return getEvents;
    }()
  }, {
    key: "removeTeamMember",
    value: function () {
      var _removeTeamMember = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(productIdOrSlug, username) {
        return _regenerator["default"].wrap(function _callee13$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                throw new _HttpError["default"]('not supported in the current server version');

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee13);
      }));

      function removeTeamMember(_x19, _x20) {
        return _removeTeamMember.apply(this, arguments);
      }

      return removeTeamMember;
    }()
  }, {
    key: "_formatProduct",
    value: function _formatProduct(product) {
      var product_id = product.product_id,
          output = (0, _objectWithoutProperties2["default"])(product, _excluded2);
      output.id = product_id;
      return output;
    }
  }]);
  return ProductsController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getProducts", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getProducts"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createProduct", [_dec3, _dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "createProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getProduct", [_dec5, _dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updateProduct", [_dec7, _dec8], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "updateProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "deleteProduct", [_dec9, _dec10], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "deleteProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getConfig", [_dec11, _dec12], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getConfig"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getDevices", [_dec13, _dec14], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getDevices"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getSingleDevice", [_dec15, _dec16], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getSingleDevice"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "addDevice", [_dec17, _dec18, _dec19], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "addDevice"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updateProductDevice", [_dec20, _dec21], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "updateProductDevice"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "removeDeviceFromProduct", [_dec22, _dec23], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "removeDeviceFromProduct"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getEvents", [_dec24, _dec25], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getEvents"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "removeTeamMember", [_dec26, _dec27], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "removeTeamMember"), _class.prototype)), _class));
var _default = ProductsController;
/* eslint-enable */

exports["default"] = _default;