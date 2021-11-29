"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var BaseRepository = function BaseRepository(database, collectionName) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BaseRepository);
  (0, _defineProperty2["default"])(this, "_database", void 0);
  (0, _defineProperty2["default"])(this, "_collectionName", void 0);
  (0, _defineProperty2["default"])(this, "count", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _this$_database, _context;

    var _len,
        filters,
        _key,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            for (_len = _args.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
              filters[_key] = _args[_key];
            }

            return _context2.abrupt("return", (_this$_database = _this._database).count.apply(_this$_database, (0, _concat["default"])(_context = [_this._collectionName]).call(_context, (0, _toConsumableArray2["default"])(filters.length ? filters : [{}]))));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  })));
  this._database = database;
  this._collectionName = collectionName;
};

var _default = BaseRepository;
exports["default"] = _default;