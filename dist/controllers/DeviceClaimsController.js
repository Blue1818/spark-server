"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

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

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _dec, _dec2, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DeviceClaimsController = (_dec = (0, _httpVerb["default"])('post'), _dec2 = (0, _route["default"])('/v1/device_claims'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(DeviceClaimsController, _Controller);

  var _super = _createSuper(DeviceClaimsController);

  function DeviceClaimsController(deviceManager, claimCodeManager) {
    var _this;

    (0, _classCallCheck2["default"])(this, DeviceClaimsController);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deviceManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_claimCodeManager", void 0);
    _this._deviceManager = deviceManager;
    _this._claimCodeManager = claimCodeManager;
    return _this;
  }

  (0, _createClass2["default"])(DeviceClaimsController, [{
    key: "createClaimCode",
    value: function () {
      var _createClaimCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var claimCode, devices, deviceIDs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                claimCode = this._claimCodeManager.createClaimCode(this.user.id);
                _context.next = 3;
                return this._deviceManager.getAll();

              case 3:
                devices = _context.sent;
                deviceIDs = (0, _map["default"])(devices).call(devices, function (device) {
                  return (0, _nullthrows["default"])(device.deviceID);
                });
                return _context.abrupt("return", this.ok({
                  claim_code: claimCode,
                  device_ids: deviceIDs
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createClaimCode() {
        return _createClaimCode.apply(this, arguments);
      }

      return createClaimCode;
    }()
  }]);
  return DeviceClaimsController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createClaimCode", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "createClaimCode"), _class.prototype)), _class));
var _default = DeviceClaimsController;
exports["default"] = _default;