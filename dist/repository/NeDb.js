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

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _fs = _interopRequireDefault(require("fs"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _nedbCore = _interopRequireDefault(require("nedb-core"));

var _collectionNames = _interopRequireDefault(require("./collectionNames"));

var _promisify = require("../lib/promisify");

var _BaseMongoDb2 = _interopRequireDefault(require("./BaseMongoDb"));

var _excluded = ["skip", "take"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NeDb = /*#__PURE__*/function (_BaseMongoDb) {
  (0, _inherits2["default"])(NeDb, _BaseMongoDb);

  var _super = _createSuper(NeDb);

  function NeDb(path) {
    var _context14;

    var _this;

    (0, _classCallCheck2["default"])(this, NeDb);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_database", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "count", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(collectionName, query) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(collection) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", (0, _promisify.promisify)(collection, 'count', query));

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
                }());

              case 2:
                _context2.t0 = _context2.sent;

                if (_context2.t0) {
                  _context2.next = 5;
                  break;
                }

                _context2.t0 = 0;

              case 5:
                return _context2.abrupt("return", _context2.t0);

              case 6:
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "insertOne", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(collectionName, entity) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(collection) {
                    var insertResult;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return (0, _promisify.promisify)(collection, 'insert', entity);

                          case 2:
                            insertResult = _context3.sent;
                            return _context3.abrupt("return", _this.__translateResultItem(insertResult));

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x6) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "find", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(collectionName, query) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(collection) {
                    var skip, take, otherQuery, result, resultItems;
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            skip = query.skip, take = query.take, otherQuery = (0, _objectWithoutProperties2["default"])(query, _excluded);
                            result = (0, _find["default"])(collection).call(collection, otherQuery);

                            if (skip || (0, _parseInt2["default"])(skip, 10) === 0) {
                              result = result.skip(skip);
                            }

                            if (take || (0, _parseInt2["default"])(take, 10) === 0) {
                              result = result.limit(take);
                            }

                            _context5.next = 6;
                            return (0, _promisify.promisify)(result, 'exec');

                          case 6:
                            resultItems = _context5.sent;
                            return _context5.abrupt("return", (0, _map["default"])(resultItems).call(resultItems, _this.__translateResultItem));

                          case 8:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x9) {
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

      return function (_x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "findAndModify", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(collectionName, query, updateQuery) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(collection) {
                    var _yield$promisify, _yield$promisify2, count, resultItem;

                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return (0, _promisify.promisify)(collection, 'update', query, updateQuery, {
                              returnUpdatedDocs: true,
                              upsert: true
                            });

                          case 2:
                            _yield$promisify = _context7.sent;
                            _yield$promisify2 = (0, _slicedToArray2["default"])(_yield$promisify, 2);
                            count = _yield$promisify2[0];
                            // eslint-disable-line no-unused-vars
                            resultItem = _yield$promisify2[1];
                            return _context7.abrupt("return", _this.__translateResultItem(resultItem));

                          case 7:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x13) {
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

      return function (_x10, _x11, _x12) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "findOne", /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(collectionName, query) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(collection) {
                    var resultItem;
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return (0, _promisify.promisify)(collection, 'findOne', query);

                          case 2:
                            resultItem = _context9.sent;
                            return _context9.abrupt("return", _this.__translateResultItem(resultItem));

                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x16) {
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

      return function (_x14, _x15) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "remove", /*#__PURE__*/function () {
      var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(collectionName, query) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", _this.__runForCollection(collectionName, /*#__PURE__*/function () {
                  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(collection) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            return _context11.abrupt("return", (0, _promisify.promisify)(collection, 'remove', query));

                          case 1:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x19) {
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

      return function (_x17, _x18) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "__runForCollection", /*#__PURE__*/function () {
      var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(collectionName, callback) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", callback(_this._database[collectionName]));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x20, _x21) {
        return _ref13.apply(this, arguments);
      };
    }());

    if (!_fs["default"].existsSync(path)) {
      _mkdirp["default"].sync(path);
    }

    _this._database = {};
    (0, _forEach["default"])(_context14 = (0, _values["default"])(_collectionNames["default"])).call(_context14, function (collectionName) {
      var _context15;

      var colName = collectionName;
      _this._database[collectionName] = new _nedbCore["default"]({
        autoload: true,
        filename: (0, _concat["default"])(_context15 = "".concat(path, "/")).call(_context15, colName, ".db")
      });
    });
    return _this;
  }

  return NeDb;
}(_BaseMongoDb2["default"]);

var _default = NeDb;
exports["default"] = _default;