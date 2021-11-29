"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var _default = function _default(httpVerb) {
  return function (target, name, descriptor) {
    target[name].httpVerb = httpVerb;
    return descriptor;
  };
};

exports["default"] = _default;