"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/applyDecoratedDescriptor"));

var _sparkProtocol = require("spark-protocol");

var _dec, _class;

var DeviceFirmwareFileRepository = (_dec = (0, _sparkProtocol.memoizeGet)([], {
  promise: false
}), (_class = /*#__PURE__*/function () {
  function DeviceFirmwareFileRepository(path) {
    (0, _classCallCheck2["default"])(this, DeviceFirmwareFileRepository);
    (0, _defineProperty2["default"])(this, "_fileManager", void 0);
    this._fileManager = new _sparkProtocol.FileManager(path, false);
  }

  (0, _createClass2["default"])(DeviceFirmwareFileRepository, [{
    key: "getByName",
    value: function getByName(appName) {
      return this._fileManager.getFileBuffer("".concat(appName, ".bin"));
    }
  }]);
  return DeviceFirmwareFileRepository;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getByName", [_dec], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getByName"), _class.prototype)), _class));
var _default = DeviceFirmwareFileRepository;
exports["default"] = _default;