"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

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

var _deviceToAPI = _interopRequireDefault(require("../lib/deviceToAPI"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _dec, _dec2, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProvisioningController = (_dec = (0, _httpVerb["default"])('post'), _dec2 = (0, _route["default"])('/v1/provisioning/:deviceID'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(ProvisioningController, _Controller);

  var _super = _createSuper(ProvisioningController);

  function ProvisioningController(deviceManager) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProvisioningController);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deviceManager", void 0);
    _this._deviceManager = deviceManager;
    return _this;
  }

  (0, _createClass2["default"])(ProvisioningController, [{
    key: "provision",
    value: function () {
      var _provision = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(deviceID, postBody) {
        var device;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (postBody.publicKey) {
                  _context.next = 2;
                  break;
                }

                throw new _HttpError["default"]('No key provided');

              case 2:
                _context.next = 4;
                return this._deviceManager.provision(deviceID, this.user.id, postBody.publicKey, postBody.algorithm);

              case 4:
                device = _context.sent;

                if (device) {
                  _context.next = 7;
                  break;
                }

                throw new _HttpError["default"]('Provisioning error');

              case 7:
                return _context.abrupt("return", this.ok((0, _deviceToAPI["default"])(device)));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function provision(_x, _x2) {
        return _provision.apply(this, arguments);
      }

      return provision;
    }()
  }]);
  return ProvisioningController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "provision", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "provision"), _class.prototype)), _class));
var _default = ProvisioningController;
exports["default"] = _default;