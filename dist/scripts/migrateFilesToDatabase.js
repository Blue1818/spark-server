"use strict";

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _endsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/ends-with"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _isNan = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/is-nan"));

var _map2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _mongodb = require("mongodb");

var _settings = _interopRequireDefault(require("../settings"));

var _NeDb = _interopRequireDefault(require("../repository/NeDb"));

var _MongoDb = _interopRequireDefault(require("../repository/MongoDb"));

var _excluded = ["id"];

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context24; _forEachInstanceProperty2(_context24 = ownKeys(Object(source), true)).call(_context24, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context25; _forEachInstanceProperty2(_context25 = ownKeys(Object(source))).call(_context25, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DATABASE_TYPE = process.argv[2];

var setupDatabase = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(DATABASE_TYPE === 'mongo')) {
              _context.next = 4;
              break;
            }

            if (_settings["default"].DB_CONFIG.URL) {
              _context.next = 3;
              break;
            }

            throw new Error('You should provide mongoDB connection URL' + 'in settings.DB_CONFIG.URL');

          case 3:
            return _context.abrupt("return", new _MongoDb["default"](_settings["default"].DB_CONFIG.URL, _settings["default"].DB_CONFIG.OPTIONS));

          case 4:
            if (!(DATABASE_TYPE === 'nedb')) {
              _context.next = 8;
              break;
            }

            if (_settings["default"].DB_CONFIG.PATH) {
              _context.next = 7;
              break;
            }

            throw new Error('You should provide path to dir where NeDB will store the db files' + 'in settings.DB_CONFIG.PATH');

          case 7:
            return _context.abrupt("return", new _NeDb["default"](_settings["default"].DB_CONFIG.PATH));

          case 8:
            throw new Error('Wrong database type');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setupDatabase() {
    return _ref.apply(this, arguments);
  };
}();

var getFiles = function getFiles(directoryPath) {
  var _context2;

  var fileExtension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.json';
  var fileNames = (0, _filter["default"])(_context2 = _fs["default"].readdirSync(directoryPath)).call(_context2, function (fileName) {
    return (0, _endsWith["default"])(fileName).call(fileName, fileExtension);
  });
  return (0, _map["default"])(fileNames).call(fileNames, function (fileName) {
    var _context3;

    return {
      fileBuffer: _fs["default"].readFileSync((0, _concat["default"])(_context3 = "".concat(directoryPath, "/")).call(_context3, fileName)),
      fileName: fileName
    };
  });
};

var parseFile = function parseFile(file) {
  return JSON.parse(file.toString());
};

var mapOwnerID = function mapOwnerID(userIDsMap) {
  return function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      ownerID: userIDsMap.get(item.ownerID) || null
    });
  };
};

var translateDeviceID = function translateDeviceID(item) {
  return _objectSpread(_objectSpread({}, item), {}, {
    _id: new _mongodb.ObjectId(item.deviceID),
    id: item.deviceID
  });
}; // eslint-disable-next-line no-unused-vars


var filterID = function filterID(_ref2) {
  var id = _ref2.id,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  return _objectSpread({}, otherProps);
};

var deepDateCast = function deepDateCast(node) {
  var _context4;

  (0, _forEach["default"])(_context4 = (0, _keys["default"])(node)).call(_context4, function (key) {
    if (node[key] === Object(node[key])) {
      deepDateCast(node[key]);
    }

    if (!(0, _isNan["default"])(Date.parse(node[key]))) {
      // eslint-disable-next-line
      node[key] = new Date(node[key]);
    }
  });
  return node;
};

var insertItem = function insertItem(database, collectionName) {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(item) {
      return _regenerator["default"].wrap(function _callee2$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", database.insertOne(collectionName, item));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var insertUsers = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(database, users) {
    var _context6;

    var userIDsMap;
    return _regenerator["default"].wrap(function _callee4$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            userIDsMap = new _map2["default"]();
            _context8.next = 3;
            return _promise["default"].all((0, _map["default"])(_context6 = (0, _map["default"])(users).call(users, deepDateCast)).call(_context6, /*#__PURE__*/function () {
              var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
                var insertedUser;
                return _regenerator["default"].wrap(function _callee3$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return database.insertOne('users', filterID(user));

                      case 2:
                        insertedUser = _context7.sent;
                        userIDsMap.set(user.id, insertedUser.id);

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }()));

          case 3:
            return _context8.abrupt("return", userIDsMap);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee4);
  }));

  return function insertUsers(_x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
  var _context9, _context10, _context11, _context12, _context13, _context14, _context15, _context16, _context17, _context18, _context19, _context20, _context21, _context22, database, users, userIDsMap;

  return _regenerator["default"].wrap(function _callee5$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          console.log('Setup database connection...');
          _context23.next = 4;
          return setupDatabase();

        case 4:
          database = _context23.sent;
          console.log("Start migration to ".concat(DATABASE_TYPE));
          users = (0, _map["default"])(_context9 = getFiles(_settings["default"].USERS_DIRECTORY)).call(_context9, function (_ref7) {
            var fileBuffer = _ref7.fileBuffer;
            return parseFile(fileBuffer);
          });
          _context23.next = 9;
          return insertUsers(database, users);

        case 9:
          userIDsMap = _context23.sent;
          _context23.next = 12;
          return _promise["default"].all((0, _map["default"])(_context10 = (0, _map["default"])(_context11 = (0, _map["default"])(_context12 = (0, _map["default"])(_context13 = (0, _map["default"])(_context14 = getFiles(_settings["default"].WEBHOOKS_DIRECTORY)).call(_context14, function (_ref8) {
            var fileBuffer = _ref8.fileBuffer;
            return parseFile(fileBuffer);
          })).call(_context13, deepDateCast)).call(_context12, mapOwnerID(userIDsMap))).call(_context11, filterID)).call(_context10, insertItem(database, 'webhooks')));

        case 12:
          _context23.next = 14;
          return _promise["default"].all((0, _map["default"])(_context15 = (0, _map["default"])(_context16 = (0, _map["default"])(_context17 = (0, _map["default"])(_context18 = (0, _map["default"])(_context19 = (0, _map["default"])(_context20 = getFiles(_settings["default"].DEVICE_DIRECTORY)).call(_context20, function (_ref9) {
            var fileBuffer = _ref9.fileBuffer;
            return parseFile(fileBuffer);
          })).call(_context19, deepDateCast)).call(_context18, mapOwnerID(userIDsMap))).call(_context17, translateDeviceID)).call(_context16, filterID)).call(_context15, insertItem(database, 'deviceAttributes')));

        case 14:
          _context23.next = 16;
          return _promise["default"].all((0, _map["default"])(_context21 = (0, _map["default"])(_context22 = getFiles(_settings["default"].DEVICE_DIRECTORY, '.pub.pem')).call(_context22, function (_ref10) {
            var fileName = _ref10.fileName,
                fileBuffer = _ref10.fileBuffer;
            return {
              algorithm: 'rsa',
              deviceID: fileName.substring(0, (0, _indexOf["default"])(fileName).call(fileName, '.pub.pem')),
              key: fileBuffer.toString()
            };
          })).call(_context21, insertItem(database, 'deviceKeys')));

        case 16:
          console.log('All files migrated to the database successfully!');
          process.exit(0);
          _context23.next = 24;
          break;

        case 20:
          _context23.prev = 20;
          _context23.t0 = _context23["catch"](0);
          console.log(_context23.t0);
          process.exit(1);

        case 24:
        case "end":
          return _context23.stop();
      }
    }
  }, _callee5, null, [[0, 20]]);
}))();