"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var _default = function _default(route) {
  return function (target, name, descriptor) {
    target[name].route = route;
    return descriptor;
  };
};

exports["default"] = _default;