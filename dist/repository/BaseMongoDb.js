"use strict";

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _mongodb = require("mongodb");

var _excluded = ["id"],
    _excluded2 = ["_id"];

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty2(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty2(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var deepToObjectIdCast = function deepToObjectIdCast(node) {
  var _context;

  (0, _forEach["default"])(_context = (0, _keys["default"])(node)).call(_context, function (key) {
    if (node[key] === Object(node[key])) {
      deepToObjectIdCast(node[key]);
    }

    if (key === '_id') {
      // eslint-disable-next-line
      node[key] = new _mongodb.ObjectId(node[key]);
    }
  });
  return node;
};

var BaseMongoDb = function BaseMongoDb() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BaseMongoDb);
  (0, _defineProperty2["default"])(this, "__filterID", function (_ref) {
    var id = _ref.id,
        otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    return _objectSpread({}, otherProps);
  });
  (0, _defineProperty2["default"])(this, "__translateQuery", function (query) {
    return _this.__filterID(deepToObjectIdCast(query));
  });
  (0, _defineProperty2["default"])(this, "__translateResultItem", function (item) {
    if (!item) {
      return null;
    }

    var _id = item._id,
        otherProps = (0, _objectWithoutProperties2["default"])(item, _excluded2);
    return _objectSpread(_objectSpread({}, otherProps), {}, {
      id: _id.toString()
    });
  });
};

var _default = BaseMongoDb;
exports["default"] = _default;