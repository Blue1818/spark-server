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

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SETTINGS_OVERRIDE_PATH = _path["default"].join(process.cwd(), 'settings.json');

var settingsOverrides = {};

if (_fs["default"].existsSync(SETTINGS_OVERRIDE_PATH)) {
  settingsOverrides = JSON.parse(_fs["default"].readFileSync(SETTINGS_OVERRIDE_PATH));
  console.log('Loading settings overrides: ', settingsOverrides);
}

var SETTINGS = _objectSpread({
  BUILD_DIRECTORY: _path["default"].join(process.cwd(), 'data/build'),
  DEFAULT_ADMIN_PASSWORD: 'adminPassword',
  DEFAULT_ADMIN_USERNAME: '__admin__',
  DEVICE_DIRECTORY: _path["default"].join(process.cwd(), 'data/deviceKeys'),
  ENABLE_SYSTEM_FIRWMARE_AUTOUPDATES: true,
  FIRMWARE_DIRECTORY: _path["default"].join(process.cwd(), 'data/knownApps'),
  FIRMWARE_REPOSITORY_DIRECTORY: _path["default"].join(process.cwd(), '../spark-firmware'),
  SERVER_KEY_FILENAME: 'default_key.pem',
  SERVER_KEYS_DIRECTORY: _path["default"].join(process.cwd(), 'data'),
  USERS_DIRECTORY: _path["default"].join(process.cwd(), 'data/users'),
  WEBHOOKS_DIRECTORY: _path["default"].join(process.cwd(), 'data/webhooks'),
  ACCESS_TOKEN_LIFETIME: 7776000,
  // 90 days,
  API_TIMEOUT: 30000,
  // Timeout for API requests.
  CRYPTO_ALGORITHM: 'aes-128-cbc',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOGIN_ROUTE: '/oauth/token',
  EXPRESS_SERVER_CONFIG: {
    PORT: 8080,
    SSL_CERTIFICATE_FILEPATH: null,
    SSL_PRIVATE_KEY_FILEPATH: null,
    USE_SSL: false
  },
  DB_CONFIG: {
    DB_TYPE: 'nedb',
    PATH: _path["default"].join(process.cwd(), 'data/db')
  },
  SHOW_VERBOSE_DEVICE_LOGS: false,
  TCP_DEVICE_SERVER_CONFIG: {
    HOST: 'localhost',
    PORT: 5683
  },
  // Override template parameters in webhooks with this object
  WEBHOOK_TEMPLATE_PARAMETERS: {// SOME_AUTH_TOKEN: '12312312',
  },
  ALLOW_DEVICE_TO_PROVIDE_PEM: true
}, settingsOverrides);

var _default = SETTINGS;
exports["default"] = _default;