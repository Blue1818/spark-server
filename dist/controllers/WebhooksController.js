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

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context6; _forEachInstanceProperty(_context6 = ownKeys(Object(source))).call(_context6, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var validateWebhookMutator = function validateWebhookMutator(webhookMutator) {
  if (!webhookMutator.event) {
    return new _HttpError["default"]('no event name provided');
  }

  if (!webhookMutator.url) {
    return new _HttpError["default"]('no url provided');
  }

  if (!webhookMutator.requestType) {
    return new _HttpError["default"]('no requestType provided');
  }

  return null;
};

var WebhooksController = (_dec = (0, _httpVerb["default"])('get'), _dec2 = (0, _route["default"])('/v1/webhooks'), _dec3 = (0, _httpVerb["default"])('get'), _dec4 = (0, _route["default"])('/v1/webhooks/:webhookID'), _dec5 = (0, _httpVerb["default"])('post'), _dec6 = (0, _route["default"])('/v1/webhooks'), _dec7 = (0, _httpVerb["default"])('delete'), _dec8 = (0, _route["default"])('/v1/webhooks/:webhookID'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(WebhooksController, _Controller);

  var _super = _createSuper(WebhooksController);

  function WebhooksController(webhookManager) {
    var _this;

    (0, _classCallCheck2["default"])(this, WebhooksController);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_webhookManager", void 0);
    _this._webhookManager = webhookManager;
    return _this;
  }

  (0, _createClass2["default"])(WebhooksController, [{
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return this._webhookManager.getAll();

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.ok.call(_context.t0, _context.t1));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getByID",
    value: function () {
      var _getByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(webhookID) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = this;
                _context2.next = 3;
                return this._webhookManager.getByID(webhookID);

              case 3:
                _context2.t1 = _context2.sent;
                return _context2.abrupt("return", _context2.t0.ok.call(_context2.t0, _context2.t1));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getByID(_x) {
        return _getByID.apply(this, arguments);
      }

      return getByID;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(model) {
        var validateError, newWebhook;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                validateError = validateWebhookMutator(model);

                if (!validateError) {
                  _context3.next = 3;
                  break;
                }

                throw validateError;

              case 3:
                _context3.next = 5;
                return this._webhookManager.create(_objectSpread(_objectSpread({}, model), {}, {
                  ownerID: this.user.id
                }));

              case 5:
                newWebhook = _context3.sent;
                return _context3.abrupt("return", this.ok({
                  created_at: newWebhook.created_at,
                  event: newWebhook.event,
                  id: newWebhook.id,
                  ok: true,
                  url: newWebhook.url
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteByID",
    value: function () {
      var _deleteByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(webhookID) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._webhookManager.deleteByID(webhookID);

              case 2:
                return _context4.abrupt("return", this.ok({
                  ok: true
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteByID(_x3) {
        return _deleteByID.apply(this, arguments);
      }

      return deleteByID;
    }()
  }]);
  return WebhooksController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getAll", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getAll"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getByID", [_dec3, _dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getByID"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "create", [_dec5, _dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "create"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "deleteByID", [_dec7, _dec8], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "deleteByID"), _class.prototype)), _class));
var _default = WebhooksController;
exports["default"] = _default;