"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.promisify = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var promisify = function promisify(object, fnName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return new _promise["default"](function (resolve, reject) {
    return object[fnName].apply(object, (0, _concat["default"])(args).call(args, [function (error) {
      if (error) {
        reject(error);
        return null;
      }

      for (var _len2 = arguments.length, callbackArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        callbackArgs[_key2 - 1] = arguments[_key2];
      }

      return callbackArgs.length <= 1 ? resolve.apply(void 0, callbackArgs) : resolve(callbackArgs);
    }]));
  });
};

exports.promisify = promisify;