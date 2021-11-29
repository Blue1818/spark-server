"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var eventToApi = function eventToApi(event) {
  return {
    coreid: event.deviceID || null,
    data: event.data || null,
    published_at: event.publishedAt,
    ttl: event.ttl || 0
  };
};

var _default = eventToApi;
exports["default"] = _default;