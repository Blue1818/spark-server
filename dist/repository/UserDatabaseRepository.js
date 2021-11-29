"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

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

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _BaseRepository2 = _interopRequireDefault(require("./BaseRepository"));

var _collectionNames = _interopRequireDefault(require("./collectionNames"));

var _PasswordHasher = _interopRequireDefault(require("../lib/PasswordHasher"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context13; _forEachInstanceProperty(_context13 = ownKeys(Object(source), true)).call(_context13, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context14; _forEachInstanceProperty(_context14 = ownKeys(Object(source))).call(_context14, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UserDatabaseRepository = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(UserDatabaseRepository, _BaseRepository);

  var _super = _createSuper(UserDatabaseRepository);

  function UserDatabaseRepository(database) {
    var _this;

    (0, _classCallCheck2["default"])(this, UserDatabaseRepository);
    _this = _super.call(this, database, _collectionNames["default"].USERS);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_database", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_collectionName", _collectionNames["default"].USERS);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_currentUser", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "create", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this._database.insertOne(_this._collectionName, user));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createWithCredentials", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userCredentials) {
        var userRole,
            username,
            password,
            salt,
            passwordHash,
            modelToSave,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userRole = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                username = userCredentials.username, password = userCredentials.password;
                _context2.next = 4;
                return _PasswordHasher["default"].generateSalt();

              case 4:
                salt = _context2.sent;
                _context2.next = 7;
                return _PasswordHasher["default"].hash(password, salt);

              case 7:
                passwordHash = _context2.sent;
                modelToSave = {
                  accessTokens: [],
                  created_at: new Date(),
                  passwordHash: passwordHash,
                  role: userRole,
                  salt: salt,
                  username: username
                };
                return _context2.abrupt("return", _this._database.insertOne(_this._collectionName, modelToSave));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "deleteAccessToken", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userID, accessToken) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this._database.findAndModify(_this._collectionName, {
                  _id: userID
                }, {
                  $pull: {
                    accessTokens: {
                      accessToken: accessToken
                    }
                  }
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "deleteByID", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _this._database.remove(_this._collectionName, {
                  _id: id
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              throw new Error('The method is not implemented');

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByAccessToken", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(accessToken) {
        var user;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this._database.findOne(_this._collectionName, {
                  accessTokens: {
                    $elemMatch: {
                      accessToken: accessToken
                    }
                  }
                });

              case 2:
                user = _context6.sent;

                if (user) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 6;
                return _this._database.findOne(_this._collectionName, {
                  'accessTokens.accessToken': accessToken
                });

              case 6:
                user = _context6.sent;

              case 7:
                return _context6.abrupt("return", user);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByID", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              throw new Error('The method is not implemented');

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByUsername", /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(username) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _this._database.findOne(_this._collectionName, {
                  username: username
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCurrentUser", function () {
      return _this._currentUser;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isUserNameInUse", /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(username) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this.getByUsername(username);

              case 2:
                return _context9.abrupt("return", !!_context9.sent);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveAccessToken", /*#__PURE__*/function () {
      var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(userID, tokenObject) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", _this._database.findAndModify(_this._collectionName, {
                  _id: userID
                }, {
                  $push: {
                    accessTokens: tokenObject
                  }
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x9, _x10) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setCurrentUser", function (user) {
      _this._currentUser = user;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateByID", /*#__PURE__*/function () {
      var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id, props) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", _this._database.findAndModify(_this._collectionName, {
                  _id: id
                }, {
                  $set: _objectSpread({}, props)
                }));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x11, _x12) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "validateLogin", /*#__PURE__*/function () {
      var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(username, password) {
        var user, hash;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _this._database.findOne(_this._collectionName, {
                  username: username
                });

              case 2:
                user = _context12.sent;

                if (user) {
                  _context12.next = 5;
                  break;
                }

                throw new _HttpError["default"]("User doesn't exist", 404);

              case 5:
                _context12.next = 7;
                return _PasswordHasher["default"].hash(password, user.salt);

              case 7:
                hash = _context12.sent;

                if (!(hash !== user.passwordHash)) {
                  _context12.next = 10;
                  break;
                }

                throw new _HttpError["default"]('Wrong password');

              case 10:
                return _context12.abrupt("return", user);

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x13, _x14) {
        return _ref12.apply(this, arguments);
      };
    }());
    _this._database = database;
    return _this;
  } // eslint-disable-next-line no-unused-vars


  return UserDatabaseRepository;
}(_BaseRepository2["default"]);

var _default = UserDatabaseRepository;
exports["default"] = _default;