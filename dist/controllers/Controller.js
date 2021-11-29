"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var Controller = /*#__PURE__*/function () {
  function Controller() {
    (0, _classCallCheck2["default"])(this, Controller);
    (0, _defineProperty2["default"])(this, "request", void 0);
    (0, _defineProperty2["default"])(this, "response", void 0);
    (0, _defineProperty2["default"])(this, "user", void 0);
  }

  (0, _createClass2["default"])(Controller, [{
    key: "bad",
    value: function bad(message) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
      return {
        data: {
          error: message,
          ok: false
        },
        status: status
      };
    }
  }, {
    key: "ok",
    value: function ok(output) {
      return {
        data: output,
        status: 200
      };
    }
  }]);
  return Controller;
}();

exports["default"] = Controller;