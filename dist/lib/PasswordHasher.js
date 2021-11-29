"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _crypto = _interopRequireDefault(require("crypto"));

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
var HASH_DIGEST = 'sha256';
var HASH_ITERATIONS = 30000;
var KEY_LENGTH = 64;

var PasswordHasher = /*#__PURE__*/function () {
  function PasswordHasher() {
    (0, _classCallCheck2["default"])(this, PasswordHasher);
  }

  (0, _createClass2["default"])(PasswordHasher, null, [{
    key: "generateSalt",
    value: function generateSalt() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 64;
      return new _promise["default"](function (resolve, reject) {
        _crypto["default"].randomBytes(size, function (error, buffer) {
          if (error) {
            reject(error);
            return;
          }

          resolve(buffer.toString('base64'));
        });
      });
    }
  }, {
    key: "hash",
    value: function hash(password, salt) {
      return new _promise["default"](function (resolve, reject) {
        _crypto["default"].pbkdf2(password, salt, HASH_ITERATIONS, KEY_LENGTH, HASH_DIGEST, function (error, key) {
          if (error) {
            reject(error);
            return;
          }

          resolve(key.toString('base64'));
        });
      });
    }
  }]);
  return PasswordHasher;
}();

var _default = PasswordHasher;
exports["default"] = _default;