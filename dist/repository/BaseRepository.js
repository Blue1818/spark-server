"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var BaseRepository = function BaseRepository(database, collectionName) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BaseRepository);
  (0, _defineProperty2["default"])(this, "_database", void 0);
  (0, _defineProperty2["default"])(this, "_collectionName", void 0);
  (0, _defineProperty2["default"])(this, "tryCreateIndex", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(indexConfig) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _this._database.tryCreateIndex(_this._collectionName, indexConfig));

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
  (0, _defineProperty2["default"])(this, "count", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var _this$_database, _context2;

    var _len,
        filters,
        _key,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            for (_len = _args2.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
              filters[_key] = _args2[_key];
            }

            return _context3.abrupt("return", (_this$_database = _this._database).count.apply(_this$_database, (0, _concat["default"])(_context2 = [_this._collectionName]).call(_context2, (0, _toConsumableArray2["default"])(filters.length ? filters : [{}]))));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  })));
  this._database = database;
  this._collectionName = collectionName;
};

var _default = BaseRepository;
exports["default"] = _default;