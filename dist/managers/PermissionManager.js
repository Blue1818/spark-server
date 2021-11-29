"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _oauth2Server = require("oauth2-server");

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _settings = _interopRequireDefault(require("../settings"));

var _logger = _interopRequireDefault(require("../lib/logger"));

var logger = _logger["default"].createModuleLogger(module);

var PermissionManager = /*#__PURE__*/function () {
  function PermissionManager(deviceAttributeRepository, organizationRepository, userRepository, webhookRepository, oauthServer) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, PermissionManager);
    (0, _defineProperty2["default"])(this, "_organizationRepository", void 0);
    (0, _defineProperty2["default"])(this, "_userRepository", void 0);
    (0, _defineProperty2["default"])(this, "_repositoriesByEntityName", new _map["default"]());
    (0, _defineProperty2["default"])(this, "_oauthServer", void 0);
    (0, _defineProperty2["default"])(this, "checkPermissionsForEntityByID", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(entityName, id) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getEntityByID(entityName, id);

              case 2:
                return _context.abrupt("return", !!_context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    this._organizationRepository = organizationRepository;
    this._userRepository = userRepository;

    this._repositoriesByEntityName.set('deviceAttributes', deviceAttributeRepository);

    this._repositoriesByEntityName.set('webhook', webhookRepository);

    this._oauthServer = oauthServer;
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this._init();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }

  (0, _createClass2["default"])(PermissionManager, [{
    key: "getAllEntitiesForCurrentUser",
    value: function () {
      var _getAllEntitiesForCurrentUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(entityName) {
        var currentUser;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentUser = this._userRepository.getCurrentUser();
                return _context3.abrupt("return", (0, _nullthrows["default"])(this._repositoriesByEntityName.get(entityName)).getAll(currentUser.id));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAllEntitiesForCurrentUser(_x3) {
        return _getAllEntitiesForCurrentUser.apply(this, arguments);
      }

      return getAllEntitiesForCurrentUser;
    }()
  }, {
    key: "getEntityByID",
    value: function () {
      var _getEntityByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(entityName, id) {
        var entity;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _nullthrows["default"])(this._repositoriesByEntityName.get(entityName)).getByID(id);

              case 2:
                entity = _context4.sent;

                if (entity) {
                  _context4.next = 5;
                  break;
                }

                throw new _HttpError["default"]('Entity does not exist');

              case 5:
                if (this.doesUserHaveAccess(entity)) {
                  _context4.next = 7;
                  break;
                }

                throw new _HttpError["default"]("User doesn't have access", 403);

              case 7:
                return _context4.abrupt("return", entity);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getEntityByID(_x4, _x5) {
        return _getEntityByID.apply(this, arguments);
      }

      return getEntityByID;
    }()
  }, {
    key: "_createDefaultAdminUser",
    value: function () {
      var _createDefaultAdminUser2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var token;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this._userRepository.createWithCredentials({
                  password: _settings["default"].DEFAULT_ADMIN_PASSWORD,
                  username: _settings["default"].DEFAULT_ADMIN_USERNAME
                }, 'administrator');

              case 3:
                _context5.next = 5;
                return this._generateAdminToken();

              case 5:
                token = _context5.sent;
                logger.info({
                  token: token
                }, 'New default admin user created');
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                logger.error({
                  err: _context5.t0
                }, 'Error during default admin user creating');

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      function _createDefaultAdminUser() {
        return _createDefaultAdminUser2.apply(this, arguments);
      }

      return _createDefaultAdminUser;
    }()
  }, {
    key: "doesUserHaveAccess",
    value: function doesUserHaveAccess(_ref3) {
      var ownerID = _ref3.ownerID;

      var currentUser = this._userRepository.getCurrentUser();

      return currentUser.role === 'administrator' || currentUser.id === ownerID;
    }
  }, {
    key: "_generateAdminToken",
    value: function () {
      var _generateAdminToken2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var request, response, tokenPayload;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                request = new _oauth2Server.Request({
                  body: {
                    client_id: 'spark-server',
                    client_secret: 'spark-server',
                    grant_type: 'password',
                    password: _settings["default"].DEFAULT_ADMIN_PASSWORD,
                    username: _settings["default"].DEFAULT_ADMIN_USERNAME
                  },
                  headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'transfer-encoding': 'chunked'
                  },
                  method: 'POST',
                  query: {}
                });
                response = new _oauth2Server.Response({
                  body: {},
                  headers: {}
                });
                _context6.next = 4;
                return this._oauthServer.server.token(request, response, // oauth server doesn't allow us to use infinite access token
                // so we pass some big value here
                {
                  accessTokenLifetime: 9999999999
                });

              case 4:
                tokenPayload = _context6.sent;
                return _context6.abrupt("return", tokenPayload.accessToken);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _generateAdminToken() {
        return _generateAdminToken2.apply(this, arguments);
      }

      return _generateAdminToken;
    }()
  }, {
    key: "_init",
    value: function () {
      var _init2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var defaultAdminUser, organizations;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._userRepository.getByUsername(_settings["default"].DEFAULT_ADMIN_USERNAME);

              case 2:
                defaultAdminUser = _context7.sent;

                if (!defaultAdminUser) {
                  _context7.next = 7;
                  break;
                }

                logger.info({
                  token: defaultAdminUser.accessTokens[0].accessToken
                }, 'Default Admin token');
                _context7.next = 12;
                break;

              case 7:
                _context7.next = 9;
                return this._createDefaultAdminUser();

              case 9:
                _context7.next = 11;
                return this._userRepository.getByUsername(_settings["default"].DEFAULT_ADMIN_USERNAME);

              case 11:
                defaultAdminUser = _context7.sent;

              case 12:
                _context7.next = 14;
                return this._organizationRepository.getAll();

              case 14:
                organizations = _context7.sent;

                if (!(!organizations.length && defaultAdminUser)) {
                  _context7.next = 18;
                  break;
                }

                _context7.next = 18;
                return this._organizationRepository.create({
                  name: 'DEFAULT ORG',
                  user_ids: [defaultAdminUser.id]
                });

              case 18:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _init() {
        return _init2.apply(this, arguments);
      }

      return _init;
    }()
  }]);
  return PermissionManager;
}();

var _default = PermissionManager;
exports["default"] = _default;