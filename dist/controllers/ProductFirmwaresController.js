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

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

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

var _binaryVersionReader = require("binary-version-reader");

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _allowUpload = _interopRequireDefault(require("../decorators/allowUpload"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _excluded = ["data"],
    _excluded2 = ["data", "id"],
    _excluded3 = ["data", "id"],
    _excluded4 = ["data", "id"];

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context13; _forEachInstanceProperty(_context13 = ownKeys(Object(source), true)).call(_context13, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context14; _forEachInstanceProperty(_context14 = ownKeys(Object(source))).call(_context14, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductFirmwaresController = (_dec = (0, _httpVerb["default"])('get'), _dec2 = (0, _route["default"])('/v1/products/:productIDOrSlug/firmware'), _dec3 = (0, _httpVerb["default"])('get'), _dec4 = (0, _route["default"])('/v1/products/:productIDOrSlug/firmware/:version'), _dec5 = (0, _httpVerb["default"])('post'), _dec6 = (0, _route["default"])('/v1/products/:productIDOrSlug/firmware'), _dec7 = (0, _allowUpload["default"])('binary', 1), _dec8 = (0, _httpVerb["default"])('put'), _dec9 = (0, _route["default"])('/v1/products/:productIDOrSlug/firmware/:version'), _dec10 = (0, _httpVerb["default"])('delete'), _dec11 = (0, _route["default"])('/v1/products/:productIDOrSlug/firmware/:version'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(ProductFirmwaresController, _Controller);

  var _super = _createSuper(ProductFirmwaresController);

  function ProductFirmwaresController(deviceManager, productDeviceRepository, productFirmwareRepository, productRepository) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProductFirmwaresController);
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

  (0, _createClass2["default"])(ProductFirmwaresController, [{
    key: "getFirmwares",
    value: function () {
      var _getFirmwares = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(productIDOrSlug) {
        var _this2 = this;

        var product, firmwares, mappedFirmware;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context2.sent;

                if (product) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", this.bad('Product does not exist', 404));

              case 5:
                _context2.next = 7;
                return this._productFirmwareRepository.getManyByProductID(product.product_id);

              case 7:
                firmwares = _context2.sent;
                _context2.next = 10;
                return _promise["default"].all( // eslint-disable-next-line no-unused-vars, flowtype/require-return-type, flowtype/require-parameter-type
                (0, _map["default"])(firmwares).call(firmwares, /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
                    var data, firmware, deviceCount;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            data = _ref.data, firmware = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
                            _context.next = 3;
                            return _this2._productDeviceRepository.countByProductID(product.product_id, {
                              productFirmwareVersion: firmware.version
                            });

                          case 3:
                            deviceCount = _context.sent;
                            return _context.abrupt("return", _objectSpread(_objectSpread({}, firmware), {}, {
                              device_count: deviceCount
                            }));

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 10:
                mappedFirmware = _context2.sent;
                return _context2.abrupt("return", this.ok(mappedFirmware));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getFirmwares(_x) {
        return _getFirmwares.apply(this, arguments);
      }

      return getFirmwares;
    }()
  }, {
    key: "getSingleFirmware",
    value: function () {
      var _getSingleFirmware = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(productIDOrSlug, version) {
        var product, firmwareList, existingFirmware, deviceCount, data, id, output;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context3.sent;

                if (product) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 5:
                _context3.next = 7;
                return this._productFirmwareRepository.getManyByProductID(product.product_id);

              case 7:
                firmwareList = _context3.sent;
                existingFirmware = (0, _find["default"])(firmwareList).call(firmwareList, function (firmware) {
                  return firmware.version === (0, _parseInt2["default"])(version, 10);
                });

                if (existingFirmware) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return", this.bad("Firmware version ".concat(version, " does not exist")));

              case 11:
                _context3.next = 13;
                return this._productDeviceRepository.countByProductID(product.product_id, {
                  productFirmwareVersion: existingFirmware.version
                });

              case 13:
                deviceCount = _context3.sent;
                // eslint-disable-next-line no-unused-vars
                data = existingFirmware.data, id = existingFirmware.id, output = (0, _objectWithoutProperties2["default"])(existingFirmware, _excluded2);
                return _context3.abrupt("return", this.ok(_objectSpread(_objectSpread({}, output), {}, {
                  device_count: deviceCount
                })));

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getSingleFirmware(_x3, _x4) {
        return _getSingleFirmware.apply(this, arguments);
      }

      return getSingleFirmware;
    }()
  }, {
    key: "addFirmware",
    value: function () {
      var _addFirmware = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productIDOrSlug, body) {
        var _context4;

        var missingFields, product, parser, moduleInfo, firmwarePlatformID, _context5, _moduleInfo$suffixInf, productId, productVersion, _context6, version, _context7, firmwareList, maxExistingFirmwareVersion, firmware, data, id, output;

        return _regenerator["default"].wrap(function _callee4$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                missingFields = (0, _filter["default"])(_context4 = ['binary', 'description', 'title', 'version']).call(_context4, function (key) {
                  return !body[key];
                });

                if (!missingFields.length) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", this.bad("Missing fields: ".concat(missingFields.join(', '))));

              case 3:
                // eslint-disable-next-line no-param-reassign
                body.current = this._stringToBoolean(body.current);
                _context8.next = 6;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 6:
                product = _context8.sent;

                if (product) {
                  _context8.next = 9;
                  break;
                }

                return _context8.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 9:
                parser = new _binaryVersionReader.HalModuleParser();
                _context8.next = 12;
                return new _promise["default"]( // eslint-disable-next-line flowtype/require-return-type
                function (resolve, reject) {
                  return parser.parseBuffer({
                    fileBuffer: body.binary.buffer
                  }).then(resolve, reject);
                });

              case 12:
                moduleInfo = _context8.sent;

                if (!(moduleInfo.crc.ok !== 1)) {
                  _context8.next = 15;
                  break;
                }

                return _context8.abrupt("return", this.bad('Invalid CRC. Try recompiling the firmware'));

              case 15:
                firmwarePlatformID = moduleInfo.prefixInfo.platformID;

                if (!(firmwarePlatformID !== product.platform_id)) {
                  _context8.next = 18;
                  break;
                }

                return _context8.abrupt("return", this.bad((0, _concat["default"])(_context5 = "Firmware had incorrect platform ID ".concat(firmwarePlatformID, ". Expected ")).call(_context5, product.platform_id, " ")));

              case 18:
                _moduleInfo$suffixInf = moduleInfo.suffixInfo, productId = _moduleInfo$suffixInf.productId, productVersion = _moduleInfo$suffixInf.productVersion;

                if (!(productId !== (0, _parseInt2["default"])(product.product_id, 10))) {
                  _context8.next = 21;
                  break;
                }

                return _context8.abrupt("return", this.bad((0, _concat["default"])(_context6 = "Firmware had incorrect product ID ".concat(productId, ". Expected  ")).call(_context6, product.product_id)));

              case 21:
                version = (0, _parseInt2["default"])(body.version, 10);

                if (!(productVersion !== version)) {
                  _context8.next = 24;
                  break;
                }

                return _context8.abrupt("return", this.bad((0, _concat["default"])(_context7 = "Firmware had incorrect product version ".concat(productVersion, ". Expected ")).call(_context7, product.product_id)));

              case 24:
                _context8.next = 26;
                return this._productFirmwareRepository.getManyByProductID(product.product_id);

              case 26:
                firmwareList = _context8.sent;
                maxExistingFirmwareVersion = Math.max.apply(Math, (0, _toConsumableArray2["default"])((0, _map["default"])(firmwareList).call(firmwareList, function (firmware) {
                  return (0, _parseInt2["default"])(firmware.version, 10);
                })));

                if (!(version <= maxExistingFirmwareVersion)) {
                  _context8.next = 30;
                  break;
                }

                return _context8.abrupt("return", this.bad("version must be greater than ".concat(maxExistingFirmwareVersion)));

              case 30:
                if (!body.current) {
                  _context8.next = 33;
                  break;
                }

                _context8.next = 33;
                return this._findAndUnreleaseCurrentFirmware(firmwareList);

              case 33:
                _context8.next = 35;
                return this._productFirmwareRepository.create({
                  current: body.current,
                  data: body.binary.buffer,
                  description: body.description,
                  device_count: 0,
                  name: body.binary.originalname,
                  product_id: product.product_id,
                  size: body.binary.size,
                  title: body.title,
                  version: version
                });

              case 35:
                firmware = _context8.sent;

                if (body.current) {
                  this._deviceManager.flashProductFirmware(product.product_id);
                } // eslint-disable-next-line no-unused-vars


                data = firmware.data, id = firmware.id, output = (0, _objectWithoutProperties2["default"])(firmware, _excluded3);
                return _context8.abrupt("return", this.ok(output));

              case 39:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee4, this);
      }));

      function addFirmware(_x5, _x6) {
        return _addFirmware.apply(this, arguments);
      }

      return addFirmware;
    }()
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(productIDOrSlug, version, body) {
        var _body, current, description, title, product, firmwareList, existingFirmware, firmware, data, id, output;

        return _regenerator["default"].wrap(function _callee5$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _body = body, current = _body.current, description = _body.description, title = _body.title; // eslint-disable-next-line no-param-reassign

                body = {
                  current: this._stringToBoolean(current),
                  description: description,
                  title: title
                };
                _context9.next = 4;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 4:
                product = _context9.sent;

                if (product) {
                  _context9.next = 7;
                  break;
                }

                return _context9.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 7:
                _context9.next = 9;
                return this._productFirmwareRepository.getManyByProductID(product.product_id);

              case 9:
                firmwareList = _context9.sent;
                existingFirmware = (0, _find["default"])(firmwareList).call(firmwareList, function (firmware) {
                  return firmware.version === (0, _parseInt2["default"])(version, 10);
                });

                if (existingFirmware) {
                  _context9.next = 13;
                  break;
                }

                return _context9.abrupt("return", this.bad("Firmware version ".concat(version, " does not exist")));

              case 13:
                if (!body.current) {
                  _context9.next = 16;
                  break;
                }

                _context9.next = 16;
                return this._findAndUnreleaseCurrentFirmware(firmwareList);

              case 16:
                _context9.next = 18;
                return this._productFirmwareRepository.updateByID(existingFirmware.id, _objectSpread(_objectSpread({}, existingFirmware), body));

              case 18:
                firmware = _context9.sent;
                // eslint-disable-next-line no-unused-vars
                data = firmware.data, id = firmware.id, output = (0, _objectWithoutProperties2["default"])(firmware, _excluded4);

                if (current) {
                  this._deviceManager.flashProductFirmware(product.product_id);
                }

                return _context9.abrupt("return", this.ok(output));

              case 22:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateFirmware(_x7, _x8, _x9) {
        return _updateFirmware.apply(this, arguments);
      }

      return updateFirmware;
    }()
  }, {
    key: "deleteFirmware",
    value: function () {
      var _deleteFirmware = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(productIDOrSlug, version) {
        var product, firmwareList, existingFirmware;
        return _regenerator["default"].wrap(function _callee6$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._productRepository.getByIDOrSlug(productIDOrSlug);

              case 2:
                product = _context10.sent;

                if (product) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return", this.bad("".concat(productIDOrSlug, " does not exist")));

              case 5:
                _context10.next = 7;
                return this._productFirmwareRepository.getManyByProductID(product.product_id);

              case 7:
                firmwareList = _context10.sent;
                existingFirmware = (0, _find["default"])(firmwareList).call(firmwareList, function (firmware) {
                  return firmware.version === (0, _parseInt2["default"])(version, 10);
                });

                if (existingFirmware) {
                  _context10.next = 11;
                  break;
                }

                return _context10.abrupt("return", this.bad("Firmware version ".concat(version, " does not exist")));

              case 11:
                _context10.next = 13;
                return this._productFirmwareRepository.deleteByID(existingFirmware.id);

              case 13:
                return _context10.abrupt("return", this.ok());

              case 14:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee6, this);
      }));

      function deleteFirmware(_x10, _x11) {
        return _deleteFirmware.apply(this, arguments);
      }

      return deleteFirmware;
    }()
  }, {
    key: "_findAndUnreleaseCurrentFirmware",
    value: function _findAndUnreleaseCurrentFirmware(productFirmwareList) {
      var _context11,
          _this3 = this;

      return _promise["default"].all((0, _map["default"])(_context11 = (0, _filter["default"])(productFirmwareList).call(productFirmwareList, function (firmware) {
        return firmware.current === true;
      })).call(_context11, function (releasedFirmware) {
        return _this3._productFirmwareRepository.updateByID(releasedFirmware.id, _objectSpread(_objectSpread({}, releasedFirmware), {}, {
          current: false
        }));
      }));
    }
  }, {
    key: "_stringToBoolean",
    value: function _stringToBoolean(input) {
      var _context12;

      if (input === true || input === false) {
        return input;
      }

      switch ((0, _trim["default"])(_context12 = input.toLowerCase()).call(_context12)) {
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
  return ProductFirmwaresController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getFirmwares", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getFirmwares"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getSingleFirmware", [_dec3, _dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getSingleFirmware"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "addFirmware", [_dec5, _dec6, _dec7], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "addFirmware"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updateFirmware", [_dec8, _dec9], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "updateFirmware"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "deleteFirmware", [_dec10, _dec11], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "deleteFirmware"), _class.prototype)), _class));
var _default = ProductFirmwaresController;
exports["default"] = _default;