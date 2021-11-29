"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEVICE_DEFAULT = {
  connected: false,
  current_build_target: -1,
  deviceID: '',
  functions: null,
  imei: '',
  ip: null,
  isCellular: false,
  last_iccid: '',
  lastFlashedAppName: null,
  lastHeard: null,
  name: '',
  particleProductId: -1,
  platformId: -1,
  productFirmwareVersion: -1,
  variables: null
};

var deviceToAPI = function deviceToAPI(device, result) {
  var mergedDevice = _objectSpread(_objectSpread({}, DEVICE_DEFAULT), device);

  return {
    cellular: mergedDevice.isCellular,
    connected: mergedDevice.connected || false,
    current_build_target: mergedDevice.currentBuildTarget != null ? mergedDevice.currentBuildTarget : mergedDevice.current_build_target,
    functions: mergedDevice.functions || null,
    id: mergedDevice.deviceID,
    imei: mergedDevice.imei,
    last_app: mergedDevice.lastFlashedAppName,
    last_heard: mergedDevice.lastHeard,
    last_iccid: mergedDevice.last_iccid,
    last_ip_address: mergedDevice.ip,
    name: mergedDevice.name,
    platform_id: mergedDevice.platformId,
    product_firmware_version: mergedDevice.productFirmwareVersion,
    product_id: mergedDevice.particleProductId,
    return_value: result,
    status: 'normal',
    variables: mergedDevice.variables || null
  };
};

var _default = deviceToAPI;
exports["default"] = _default;