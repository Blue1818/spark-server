"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _bunyan = _interopRequireDefault(require("bunyan"));

var _path = _interopRequireDefault(require("path"));

var _settings = _interopRequireDefault(require("../settings"));

/**
 *    Copyright (C) 2013-2014 Spark Labs, Inc. All rights reserved. -  https://www.spark.io/
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *    You can download the source here: https://github.com/spark/spark-server
 *
 * 
 *
 */
var Logger = /*#__PURE__*/function () {
  function Logger() {
    (0, _classCallCheck2["default"])(this, Logger);
  }

  (0, _createClass2["default"])(Logger, null, [{
    key: "createLogger",
    value: function createLogger(applicationName) {
      return _bunyan["default"].createLogger({
        level: _settings["default"].LOG_LEVEL,
        name: applicationName,
        serializers: _bunyan["default"].stdSerializers
      });
    }
  }, {
    key: "createModuleLogger",
    value: function createModuleLogger(applicationModule) {
      return _bunyan["default"].createLogger({
        level: _settings["default"].LOG_LEVEL,
        name: _path["default"].basename(applicationModule.filename),
        serializers: _bunyan["default"].stdSerializers
      });
    }
  }]);
  return Logger;
}();

exports["default"] = Logger;