"use strict";

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

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _oauthClients = _interopRequireDefault(require("./oauthClients.json"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source))).call(_context5, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var OAUTH_CLIENTS = _oauthClients["default"];

var OauthModel = function OauthModel(userRepository) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OauthModel);
  (0, _defineProperty2["default"])(this, "_userRepository", void 0);
  (0, _defineProperty2["default"])(this, "getAccessToken", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(bearerToken) {
      var _context;

      var user, userTokenObject;
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this._userRepository.getByAccessToken(bearerToken);

            case 2:
              user = _context2.sent;

              if (user) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", null);

            case 5:
              userTokenObject = (0, _find["default"])(_context = user.accessTokens).call(_context, function (tokenObject) {
                return tokenObject.accessToken === bearerToken;
              });

              if (userTokenObject) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", null);

            case 8:
              return _context2.abrupt("return", _objectSpread(_objectSpread({}, userTokenObject), {}, {
                user: user
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "getClient", function (clientId, clientSecret) {
    return (0, _find["default"])(OAUTH_CLIENTS).call(OAUTH_CLIENTS, function (client) {
      return client.clientId === clientId && client.clientSecret === clientSecret;
    });
  });
  (0, _defineProperty2["default"])(this, "getUser", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(username, password) {
      return _regenerator["default"].wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _this._userRepository.validateLogin(username, password));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "saveToken", function (tokenObject, client, user) {
    _this._userRepository.saveAccessToken(user.id, tokenObject);

    return {
      accessToken: tokenObject.accessToken,
      client: client,
      user: user
    };
  });
  (0, _defineProperty2["default"])(this, "validateScope", function () {
    return 'true';
  });
  this._userRepository = userRepository;
};

var _default = OauthModel;
exports["default"] = _default;