"use strict";

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

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _some = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/some"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/applyDecoratedDescriptor"));

var _uuid = _interopRequireDefault(require("uuid"));

var _sparkProtocol = require("spark-protocol");

var _PasswordHasher = _interopRequireDefault(require("../lib/PasswordHasher"));

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context20; _forEachInstanceProperty(_context20 = ownKeys(Object(source), true)).call(_context20, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context21; _forEachInstanceProperty(_context21 = ownKeys(Object(source))).call(_context21, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

var UserFileRepository = (_dec = (0, _sparkProtocol.memoizeSet)(), _dec2 = (0, _sparkProtocol.memoizeSet)(['id']), _dec3 = (0, _sparkProtocol.memoizeGet)(), _dec4 = (0, _sparkProtocol.memoizeGet)(['id']), _dec5 = (0, _sparkProtocol.memoizeGet)(['username']), _dec6 = (0, _sparkProtocol.memoizeGet)(['username']), _dec7 = (0, _sparkProtocol.memoizeSet)(), (_class = /*#__PURE__*/function () {
  function UserFileRepository(path) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, UserFileRepository);
    (0, _defineProperty2["default"])(this, "_fileManager", void 0);
    (0, _defineProperty2["default"])(this, "_currentUser", void 0);
    (0, _defineProperty2["default"])(this, "count", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _this._fileManager.count());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2["default"])(this, "createWithCredentials", /*#__PURE__*/function () {
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
                  passwordHash: passwordHash,
                  role: userRole,
                  salt: salt,
                  username: username
                };
                return _context2.abrupt("return", _this.create(modelToSave));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "deleteAccessToken", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userID, token) {
        var _context3;

        var user;
        return _regenerator["default"].wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.getByID(userID);

              case 2:
                user = _context4.sent;

                if (user) {
                  _context4.next = 5;
                  break;
                }

                throw new Error("User doesn't exist");

              case 5:
                return _context4.abrupt("return", _this.updateByID(userID, {
                  accessTokens: (0, _filter["default"])(_context3 = user.accessTokens).call(_context3, function (tokenObject) {
                    return tokenObject.accessToken !== token;
                  })
                }));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "getByAccessToken", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(accessToken) {
        var _context5;

        return _regenerator["default"].wrap(function _callee4$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = _find["default"];
                _context7.next = 3;
                return _this.getAll();

              case 3:
                _context7.t1 = _context5 = _context7.sent;
                return _context7.abrupt("return", (0, _context7.t0)(_context7.t1).call(_context5, function (user) {
                  var _context6;

                  return (0, _some["default"])(_context6 = user.accessTokens).call(_context6, function (tokenObject) {
                    return tokenObject.accessToken === accessToken;
                  });
                }));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "getCurrentUser", function () {
      return _this._currentUser;
    });
    (0, _defineProperty2["default"])(this, "saveAccessToken", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userID, tokenObject) {
        var _context8;

        var user;
        return _regenerator["default"].wrap(function _callee5$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this.getByID(userID);

              case 2:
                user = _context9.sent;

                if (user) {
                  _context9.next = 5;
                  break;
                }

                throw new _HttpError["default"]('Could not find user for user ID');

              case 5:
                return _context9.abrupt("return", _this.updateByID(userID, {
                  accessTokens: (0, _concat["default"])(_context8 = []).call(_context8, (0, _toConsumableArray2["default"])(user.accessTokens), [tokenObject])
                }));

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "setCurrentUser", function (user) {
      _this._currentUser = user;
    });
    (0, _defineProperty2["default"])(this, "validateLogin", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(username, password) {
        var user, hash;
        return _regenerator["default"].wrap(function _callee6$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this.getByUsername(username);

              case 2:
                user = _context10.sent;

                if (user) {
                  _context10.next = 5;
                  break;
                }

                throw new Error("User doesn't exist");

              case 5:
                _context10.next = 7;
                return _PasswordHasher["default"].hash(password, user.salt);

              case 7:
                hash = _context10.sent;

                if (!(hash !== user.passwordHash)) {
                  _context10.next = 10;
                  break;
                }

                throw new Error('Wrong password');

              case 10:
                return _context10.abrupt("return", user);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }());
    this._fileManager = new _sparkProtocol.JSONFileManager(path);
  }

  (0, _createClass2["default"])(UserFileRepository, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(user) {
        var id, modelToSave;
        return _regenerator["default"].wrap(function _callee7$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                id = (0, _uuid["default"])(); // eslint-disable-next-line no-await-in-loop

              case 1:
                _context11.next = 3;
                return this._fileManager.hasFile("".concat(id, ".json"));

              case 3:
                if (!_context11.sent) {
                  _context11.next = 7;
                  break;
                }

                id = (0, _uuid["default"])();
                _context11.next = 1;
                break;

              case 7:
                modelToSave = _objectSpread(_objectSpread({}, user), {}, {
                  created_at: new Date(),
                  created_by: null,
                  id: id
                });

                this._fileManager.createFile("".concat(modelToSave.id, ".json"), modelToSave);

                return _context11.abrupt("return", modelToSave);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee7, this);
      }));

      function create(_x9) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteByID",
    value: function () {
      var _deleteByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id) {
        return _regenerator["default"].wrap(function _callee8$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this._fileManager.deleteFile("".concat(id, ".json"));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee8, this);
      }));

      function deleteByID(_x10) {
        return _deleteByID.apply(this, arguments);
      }

      return deleteByID;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        return _regenerator["default"].wrap(function _callee9$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this._fileManager.getAllData());

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee9, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }() // This isn't a good one to memoize as we can't key off user ID and there
    // isn't a good way to clear the cache.

  }, {
    key: "getByID",
    value: function () {
      var _getByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
        return _regenerator["default"].wrap(function _callee10$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this._fileManager.getFile("".concat(id, ".json")));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee10, this);
      }));

      function getByID(_x11) {
        return _getByID.apply(this, arguments);
      }

      return getByID;
    }()
  }, {
    key: "getByUsername",
    value: function () {
      var _getByUsername = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(username) {
        var _context15;

        return _regenerator["default"].wrap(function _callee11$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.t0 = _find["default"];
                _context16.next = 3;
                return this.getAll();

              case 3:
                _context16.t1 = _context15 = _context16.sent;
                return _context16.abrupt("return", (0, _context16.t0)(_context16.t1).call(_context15, function (user) {
                  return user.username === username;
                }));

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee11, this);
      }));

      function getByUsername(_x12) {
        return _getByUsername.apply(this, arguments);
      }

      return getByUsername;
    }()
  }, {
    key: "isUserNameInUse",
    value: function () {
      var _isUserNameInUse = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(username) {
        var _context17;

        return _regenerator["default"].wrap(function _callee12$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.t0 = _some["default"];
                _context18.next = 3;
                return this.getAll();

              case 3:
                _context18.t1 = _context17 = _context18.sent;
                return _context18.abrupt("return", (0, _context18.t0)(_context18.t1).call(_context17, function (user) {
                  return user.username === username;
                }));

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee12, this);
      }));

      function isUserNameInUse(_x13) {
        return _isUserNameInUse.apply(this, arguments);
      }

      return isUserNameInUse;
    }()
  }, {
    key: "updateByID",
    value: function () {
      var _updateByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id, props) {
        var user, modelToSave;
        return _regenerator["default"].wrap(function _callee13$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.getByID(id);

              case 2:
                user = _context19.sent;
                modelToSave = _objectSpread(_objectSpread({}, user || {}), props);

                this._fileManager.writeFile("".concat(id, ".json"), modelToSave);

                return _context19.abrupt("return", modelToSave);

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee13, this);
      }));

      function updateByID(_x14, _x15) {
        return _updateByID.apply(this, arguments);
      }

      return updateByID;
    }()
  }]);
  return UserFileRepository;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "create", [_dec], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "create"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "deleteByID", [_dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "deleteByID"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getAll", [_dec3], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getAll"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getByID", [_dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getByID"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getByUsername", [_dec5], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getByUsername"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "isUserNameInUse", [_dec6], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "isUserNameInUse"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updateByID", [_dec7], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "updateByID"), _class.prototype)), _class));
var _default = UserFileRepository;
exports["default"] = _default;