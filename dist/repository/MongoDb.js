"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = _interopRequireDefault(require("events"));

var _mongodb = require("mongodb");

var _BaseMongoDb2 = _interopRequireDefault(require("./BaseMongoDb"));

var _logger = _interopRequireDefault(require("../lib/logger"));

var _excluded = ["skip", "take"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var logger = _logger["default"].createModuleLogger(module);

var DB_READY_EVENT = 'dbReady';

var MongoDb = /*#__PURE__*/function (_BaseMongoDb) {
  (0, _inherits2["default"])(MongoDb, _BaseMongoDb);

  var _super = _createSuper(MongoDb);

  function MongoDb(_url) {
    var _this;

    var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _classCallCheck2["default"])(this, MongoDb);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_database", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_statusEventEmitter", new _events["default"]());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tryCreateIndex", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(collectionName, indexConfig) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(collection) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", collection.createIndex(indexConfig));

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "count", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(collectionName) {
        var query,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                return _context4.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(collection) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            return _context3.abrupt("return", collection.count(_this.__translateQuery(query), {
                              timeout: false
                            }));

                          case 1:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x5) {
                    return _ref4.apply(this, arguments);
                  };
                }()) || 0);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "insertOne", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(collectionName, entity) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(collection) {
                    var insertResult;
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return collection.insertOne(entity);

                          case 2:
                            insertResult = _context5.sent;
                            return _context5.abrupt("return", _this.__translateResultItem(insertResult.ops[0]));

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x8) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6, _x7) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "find", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(collectionName, query) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(collection) {
                    var skip, take, otherQuery, result, resultItems;
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            skip = query.skip, take = query.take, otherQuery = (0, _objectWithoutProperties2["default"])(query, _excluded);
                            result = (0, _find["default"])(collection).call(collection, _this.__translateQuery(otherQuery), {
                              timeout: false
                            });

                            if (skip || (0, _parseInt2["default"])(skip, 10) === 0) {
                              result = result.skip((0, _parseInt2["default"])(skip, 10));
                            }

                            if (take || (0, _parseInt2["default"])(take, 10) === 0) {
                              result = result.limit((0, _parseInt2["default"])(take, 10));
                            }

                            _context7.next = 6;
                            return result.toArray();

                          case 6:
                            resultItems = _context7.sent;
                            return _context7.abrupt("return", (0, _map["default"])(resultItems).call(resultItems, _this.__translateResultItem));

                          case 8:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x11) {
                    return _ref8.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "findAndModify", /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(collectionName, query, updateQuery) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(collection) {
                    var modifyResult;
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return collection.findAndModify(_this.__translateQuery(query), null, _this.__translateQuery(updateQuery), {
                              "new": true,
                              upsert: true
                            });

                          case 2:
                            modifyResult = _context9.sent;
                            return _context9.abrupt("return", _this.__translateResultItem(modifyResult.value));

                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x15) {
                    return _ref10.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x12, _x13, _x14) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "findOne", /*#__PURE__*/function () {
      var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(collectionName, query) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(collection) {
                    var resultItem;
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return collection.findOne(_this.__translateQuery(query));

                          case 2:
                            resultItem = _context11.sent;
                            return _context11.abrupt("return", _this.__translateResultItem(resultItem));

                          case 4:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x18) {
                    return _ref12.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x16, _x17) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "remove", /*#__PURE__*/function () {
      var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(collectionName, query) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(collection) {
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            return _context13.abrupt("return", collection.remove(_this.__translateQuery(query)));

                          case 1:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x21) {
                    return _ref14.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x19, _x20) {
        return _ref13.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "__runForCollection", /*#__PURE__*/function () {
      var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(collectionName, callback) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return _this._isDbReady();

              case 2:
                if (_this._database) {
                  _context15.next = 4;
                  break;
                }

                throw new Error('database is not initialized');

              case 4:
                return _context15.abrupt("return", callback(_this._database.getCollection(collectionName))["catch"](function (error) {
                  return logger.error({
                    collectionName: collectionName,
                    err: error
                  }, 'Run for Collection');
                }));

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      return function (_x22, _x23) {
        return _ref15.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_init", /*#__PURE__*/function () {
      var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(url, options) {
        var database;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return _mongodb.MongoClient.connect(url, options);

              case 2:
                database = _context16.sent;
                database.on('error', function (error) {
                  return logger.error({
                    err: error,
                    options: options,
                    url: url
                  }, 'DB connection Error: ');
                });
                database.on('open', function () {
                  return logger.info('DB connected');
                });
                database.on('close', function (str) {
                  return logger.info({
                    info: str
                  }, 'DB disconnected: ');
                });
                _this._database = database;

                _this._statusEventEmitter.emit(DB_READY_EVENT);

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      return function (_x24, _x25) {
        return _ref16.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isDbReady", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17() {
      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              if (!_this._database) {
                _context17.next = 2;
                break;
              }

              return _context17.abrupt("return", _promise["default"].resolve());

            case 2:
              return _context17.abrupt("return", new _promise["default"](function (resolve) {
                _this._statusEventEmitter.once(DB_READY_EVENT, function () {
                  return resolve();
                });
              }));

            case 3:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    })));
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return _this._init(_url, _options);

            case 2:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }))();
    return _this;
  }

  return MongoDb;
}(_BaseMongoDb2["default"]);

var _default = MongoDb;
exports["default"] = _default;