"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _endsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/ends-with"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _crypto = _interopRequireDefault(require("crypto"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _rmfr = _interopRequireDefault(require("rmfr"));

var _child_process = require("child_process");

var _settings = _interopRequireDefault(require("../settings"));

var _logger = _interopRequireDefault(require("../lib/logger"));

var logger = _logger["default"].createModuleLogger(module);

var IS_COMPILATION_ENABLED = _fs["default"].existsSync(_settings["default"].FIRMWARE_REPOSITORY_DIRECTORY);

var USER_APP_PATH = _path["default"].join(_settings["default"].FIRMWARE_REPOSITORY_DIRECTORY, 'user/applications');

var BIN_PATH = _path["default"].join(_settings["default"].BUILD_DIRECTORY, 'bin');

var MAKE_PATH = _path["default"].join(_settings["default"].FIRMWARE_REPOSITORY_DIRECTORY, 'main');

var FILE_NAME_BY_KEY = new _map["default"]();

var getKey = function getKey() {
  return _crypto["default"].randomBytes(24).toString('hex').substring(0, 24);
};

var getUniqueKey = function getUniqueKey() {
  var key = getKey();

  while (FILE_NAME_BY_KEY.has(key)) {
    key = getKey();
  }

  return key;
};

var FirmwareCompilationManager = /*#__PURE__*/function () {
  function FirmwareCompilationManager() {
    (0, _classCallCheck2["default"])(this, FirmwareCompilationManager);
  }

  (0, _createClass2["default"])(FirmwareCompilationManager, null, [{
    key: "firmwareDirectoryExists",
    value: function firmwareDirectoryExists() {
      return _fs["default"].existsSync(_settings["default"].FIRMWARE_REPOSITORY_DIRECTORY);
    }
  }, {
    key: "addFirmwareCleanupTask",
    value: function addFirmwareCleanupTask(appFolderPath, config) {
      var configPath = _path["default"].join(appFolderPath, 'config.json');

      if (!_fs["default"].existsSync(configPath)) {
        _fs["default"].writeFileSync(configPath, (0, _stringify["default"])(config));
      }

      var currentDate = new Date();
      var difference = new Date(config.expires_at).getTime() - currentDate.getTime();
      (0, _setTimeout2["default"])(function () {
        return (0, _rmfr["default"])(appFolderPath);
      }, difference);
    }
  }]);
  return FirmwareCompilationManager;
}();

(0, _defineProperty2["default"])(FirmwareCompilationManager, "getBinaryForID", function (id) {
  var _context2;

  if (!FirmwareCompilationManager.firmwareDirectoryExists()) {
    return null;
  }

  var binaryPath = _path["default"].join(BIN_PATH, id);

  if (!_fs["default"].existsSync(binaryPath)) {
    return null;
  }

  var binFileName = (0, _find["default"])(_context2 = _fs["default"].readdirSync(binaryPath)).call(_context2, function (file) {
    return (0, _endsWith["default"])(file).call(file, '.bin');
  });

  if (!binFileName) {
    return null;
  }

  return _fs["default"].readFileSync(_path["default"].join(binaryPath, binFileName));
});
(0, _defineProperty2["default"])(FirmwareCompilationManager, "compileSource", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(platformID, files) {
    var _context3;

    var platformName, appFolder, appPath, id, binPath, makeProcess, errors, sizeInfo, date, config;
    return _regenerator["default"].wrap(function _callee$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (FirmwareCompilationManager.firmwareDirectoryExists()) {
              _context5.next = 2;
              break;
            }

            return _context5.abrupt("return", null);

          case 2:
            platformName = {
              '0': 'Core',
              '10': 'Electron',
              '103': 'Bluz',
              '6': 'Photon',
              '8': 'P1',
              '88': 'Duo'
            }[platformID];

            if (platformName) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", null);

          case 5:
            platformName = platformName.toLowerCase();
            appFolder = (0, _concat["default"])(_context3 = "".concat(platformName, "_firmware_")).call(_context3, new Date().getTime()).toLowerCase();
            appPath = _path["default"].join(USER_APP_PATH, appFolder);

            _mkdirp["default"].sync(appPath);

            (0, _forEach["default"])(files).call(files, function (file) {
              var fileName = file.originalname;

              var fileExtension = _path["default"].extname(fileName);

              var iterator = 0;

              var combinedPath = _path["default"].join(appPath, fileName);

              while (_fs["default"].existsSync(combinedPath)) {
                var _context4;

                combinedPath = _path["default"].join(appPath, "".concat(_path["default"].basename(fileName, fileExtension)) + (0, _concat["default"])(_context4 = "_".concat(iterator++)).call(_context4, fileExtension) // eslint-disable-line no-plusplus
                );
              }

              _fs["default"].writeFileSync(combinedPath, file.buffer);
            });
            id = getUniqueKey();
            binPath = _path["default"].join(BIN_PATH, id);
            makeProcess = (0, _child_process.spawn)('make', ["APP=".concat(appFolder), "PLATFORM_ID=".concat(platformID), "TARGET_DIR=".concat(_path["default"].relative(MAKE_PATH, binPath).replace(/\\/g, '/'))], {
              cwd: MAKE_PATH
            });
            errors = [];
            makeProcess.stderr.on('data', function (data) {
              logger.error({
                data: data
              }, 'Error from MakeProcess');
              errors.push("".concat(data));
            });
            sizeInfo = 'not implemented';
            makeProcess.stdout.on('data', function (data) {
              var output = "".concat(data);

              if ((0, _includes["default"])(output).call(output, 'text\t')) {
                sizeInfo = output;
              }
            });
            _context5.next = 19;
            return new _promise["default"](function (resolve) {
              makeProcess.on('exit', function () {
                return resolve();
              });
            });

          case 19:
            date = new Date();
            date.setDate(date.getDate() + 1);
            config = {
              binary_id: id,
              errors: errors,
              // expire in one day
              expires_at: date,
              // TODO: this variable has a bunch of extra crap including file names.
              // we should filter out the string to only show the file sizes
              sizeInfo: sizeInfo
            };
            FirmwareCompilationManager.addFirmwareCleanupTask(appPath, config);
            return _context5.abrupt("return", config);

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

if (IS_COMPILATION_ENABLED) {
  var _context;

  // Delete all expired binaries or queue them up to eventually be deleted.
  if (!_fs["default"].existsSync(_settings["default"].BUILD_DIRECTORY)) {
    _mkdirp["default"].sync(_settings["default"].BUILD_DIRECTORY);
  }

  if (!_fs["default"].existsSync(BIN_PATH)) {
    _mkdirp["default"].sync(BIN_PATH);
  }

  (0, _forEach["default"])(_context = _fs["default"].readdirSync(USER_APP_PATH)).call(_context, function (file) {
    var appFolder = _path["default"].join(USER_APP_PATH, file);

    var configPath = _path["default"].join(appFolder, 'config.json');

    if (!_fs["default"].existsSync(configPath)) {
      return;
    }

    var configString = _fs["default"].readFileSync(configPath, 'utf8');

    if (!configString) {
      return;
    }

    var config = JSON.parse(configString);

    if (config.expires_at < new Date()) {
      // TODO - clean up artifacts in the firmware folder. Every binary will have
      // files in firmare/build/target/user & firmware/build/target/user-part
      // It might make the most sense to just create a custom MAKE file to do this
      (0, _rmfr["default"])(configPath);
      (0, _rmfr["default"])(_path["default"].join(BIN_PATH, config.binary_id));
    } else {
      FirmwareCompilationManager.addFirmwareCleanupTask(appFolder, config);
    }
  });
}

var _default = FirmwareCompilationManager;
exports["default"] = _default;