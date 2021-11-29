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

var _basicAuthParser3 = _interopRequireDefault(require("basic-auth-parser"));

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _anonymous = _interopRequireDefault(require("../decorators/anonymous"));

var _httpVerb = _interopRequireDefault(require("../decorators/httpVerb"));

var _route = _interopRequireDefault(require("../decorators/route"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UsersController = (_dec = (0, _httpVerb["default"])('post'), _dec2 = (0, _route["default"])('/v1/users'), _dec3 = (0, _anonymous["default"])(), _dec4 = (0, _httpVerb["default"])('delete'), _dec5 = (0, _route["default"])('/v1/access_tokens/:token'), _dec6 = (0, _anonymous["default"])(), _dec7 = (0, _httpVerb["default"])('get'), _dec8 = (0, _route["default"])('/v1/access_tokens'), _dec9 = (0, _anonymous["default"])(), (_class = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(UsersController, _Controller);

  var _super = _createSuper(UsersController);

  function UsersController(userRepository) {
    var _this;

    (0, _classCallCheck2["default"])(this, UsersController);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_userRepository", void 0);
    _this._userRepository = userRepository;
    return _this;
  }

  (0, _createClass2["default"])(UsersController, [{
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userCredentials) {
        var isUserNameInUse;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._userRepository.isUserNameInUse(userCredentials.username);

              case 3:
                isUserNameInUse = _context.sent;

                if (!isUserNameInUse) {
                  _context.next = 6;
                  break;
                }

                throw new _HttpError["default"]('user with the username already exists');

              case 6:
                _context.next = 8;
                return this._userRepository.createWithCredentials(userCredentials);

              case 8:
                return _context.abrupt("return", this.ok({
                  ok: true
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", this.bad(_context.t0.message));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function createUser(_x) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "deleteAccessToken",
    value: function () {
      var _deleteAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(token) {
        var _basicAuthParser, username, password, user;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _basicAuthParser = (0, _basicAuthParser3["default"])(this.request.get('authorization')), username = _basicAuthParser.username, password = _basicAuthParser.password;
                _context2.next = 3;
                return this._userRepository.validateLogin(username, password);

              case 3:
                user = _context2.sent;

                this._userRepository.deleteAccessToken(user.id, token);

                return _context2.abrupt("return", this.ok({
                  ok: true
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteAccessToken(_x2) {
        return _deleteAccessToken.apply(this, arguments);
      }

      return deleteAccessToken;
    }()
  }, {
    key: "getAccessTokens",
    value: function () {
      var _getAccessTokens = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _basicAuthParser2, username, password, user;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _basicAuthParser2 = (0, _basicAuthParser3["default"])(this.request.get('authorization')), username = _basicAuthParser2.username, password = _basicAuthParser2.password;
                _context3.next = 3;
                return this._userRepository.validateLogin(username, password);

              case 3:
                user = _context3.sent;
                return _context3.abrupt("return", this.ok(user.accessTokens));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAccessTokens() {
        return _getAccessTokens.apply(this, arguments);
      }

      return getAccessTokens;
    }()
  }]);
  return UsersController;
}(_Controller2["default"]), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createUser", [_dec, _dec2, _dec3], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "createUser"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "deleteAccessToken", [_dec4, _dec5, _dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "deleteAccessToken"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getAccessTokens", [_dec7, _dec8, _dec9], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getAccessTokens"), _class.prototype)), _class));
var _default = UsersController;
exports["default"] = _default;