"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var _default = function _default() {
  var fileName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var maxCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (target, name, descriptor) {
    var allowedUploads = target[name].allowedUploads || [];

    if (fileName) {
      allowedUploads.push({
        maxCount: maxCount,
        name: fileName
      });
    }

    target[name].allowedUploads = allowedUploads;
    return descriptor;
  };
};

exports["default"] = _default;