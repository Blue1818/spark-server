"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _constitute = require("constitute");

var _arrayFlatten = _interopRequireDefault(require("array-flatten"));

var _nullthrows = _interopRequireDefault(require("nullthrows"));

var _fs = _interopRequireDefault(require("fs"));

var _http = _interopRequireDefault(require("http"));

var _https = _interopRequireDefault(require("https"));

var _os = _interopRequireDefault(require("os"));

var _app = _interopRequireDefault(require("./app"));

var _defaultBindings = _interopRequireDefault(require("./defaultBindings"));

var _settings = _interopRequireDefault(require("./settings"));

var _logger = _interopRequireDefault(require("./lib/logger"));

var _context;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _forEachInstanceProperty2(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context5; _forEachInstanceProperty2(_context5 = ownKeys(Object(source))).call(_context5, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

// $FlowIgnore[invalid-export]
var logger = _logger["default"].createModuleLogger(module);

var NODE_PORT = process.env.NODE_PORT || _settings["default"].EXPRESS_SERVER_CONFIG.PORT;
process.on('uncaughtException', function (exception) {
  logger.error({
    err: exception
  }, 'uncaughtException');
  process.exit(1); // exit with failure
});
/* This is the container used app-wide for dependency injection. If you want to
 * override any of the implementations, create your module with the new
 * implementation and use:
 *
 * container.bindAlias(DefaultImplementation, MyNewImplementation);
 *
 * You can also set a new value
 * container.bindAlias(DefaultValue, 12345);
 *
 * See https://github.com/justmoon/constitute for more info
 */

var container = new _constitute.Container();
(0, _defaultBindings["default"])(container, _settings["default"]);
var deviceServer = container.constitute('DeviceServer');
deviceServer.start();
var app = (0, _app["default"])(container, _settings["default"]);

var onServerStartListen = function onServerStartListen() {
  logger.info({
    port: NODE_PORT
  }, 'Express server started, with events');
};

var _settings$EXPRESS_SER = _settings["default"].EXPRESS_SERVER_CONFIG,
    privateKeyFilePath = _settings$EXPRESS_SER.SSL_PRIVATE_KEY_FILEPATH,
    certificateFilePath = _settings$EXPRESS_SER.SSL_CERTIFICATE_FILEPATH,
    useSSL = _settings$EXPRESS_SER.USE_SSL,
    expressConfig = (0, _objectWithoutProperties2["default"])(_settings$EXPRESS_SER, ["SSL_PRIVATE_KEY_FILEPATH", "SSL_CERTIFICATE_FILEPATH", "USE_SSL"]);

if (useSSL) {
  logger.debug({
    cert: certificateFilePath,
    key: privateKeyFilePath
  }, 'Use SSL');

  var options = _objectSpread({
    cert: certificateFilePath && _fs["default"].readFileSync((0, _nullthrows["default"])(certificateFilePath)),
    key: privateKeyFilePath && _fs["default"].readFileSync((0, _nullthrows["default"])(privateKeyFilePath))
  }, expressConfig);

  _https["default"].createServer(options, app).listen(NODE_PORT, onServerStartListen);
} else {
  _http["default"].createServer(app).listen(NODE_PORT, onServerStartListen);
}

var addresses = (0, _arrayFlatten["default"])((0, _map["default"])(_context = (0, _entries["default"])(_os["default"].networkInterfaces())).call(_context, // eslint-disable-next-line no-unused-vars
function (_ref) {
  var _context2, _context3;

  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      name = _ref2[0],
      nic = _ref2[1];

  return (0, _map["default"])(_context2 = (0, _filter["default"])(_context3 = nic).call(_context3, function (address) {
    return address.family === 'IPv4' && address.address !== '127.0.0.1';
  })).call(_context2, function (address) {
    return address.address;
  });
}));
(0, _forEach["default"])(addresses).call(addresses, function (address) {
  return logger.info({
    address: address
  }, 'Server IP address found');
});