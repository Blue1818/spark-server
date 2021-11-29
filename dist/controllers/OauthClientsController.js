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

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/applyDecoratedDescriptor"));

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var OauthClientsController = (_dec = (0, _httpVerb["default"])('post'), _dec2 = (0, _route["default"])('/v1/products/:productIDorSlug/clients/'), _dec3 = (0, _httpVerb["default"])('put'), _dec4 = (0, _route["default"])('/v1/products/:productIDorSlug/clients/:clientID'), _dec5 = (0, _httpVerb["default"])('delete'), _dec6 = (0, _route["default"])('/v1/products/:productIDorSlug/clients/:clientID'), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(OauthClientsController, _Controller);

  var _super = _createSuper(OauthClientsController);

  function OauthClientsController() {
    (0, _classCallCheck2["default"])(this, OauthClientsController);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(OauthClientsController, [{
    key: "createClient",
    value: function () {
      var _createClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                throw new _HttpError["default"]('not supported in the current server version');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createClient() {
        return _createClient.apply(this, arguments);
      }

      return createClient;
    }()
  }, {
    key: "editClient",
    value: function () {
      var _editClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                throw new _HttpError["default"]('not supported in the current server version');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function editClient() {
        return _editClient.apply(this, arguments);
      }

      return editClient;
    }()
  }, {
    key: "deleteClient",
    value: function () {
      var _deleteClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                throw new _HttpError["default"]('not supported in the current server version');

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteClient() {
        return _deleteClient.apply(this, arguments);
      }

      return deleteClient;
    }()
  }]);
  return OauthClientsController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createClient", [_dec, _dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "createClient"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "editClient", [_dec3, _dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "editClient"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "deleteClient", [_dec5, _dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "deleteClient"), _class.prototype)), _class));
var _default = OauthClientsController;
exports["default"] = _default;