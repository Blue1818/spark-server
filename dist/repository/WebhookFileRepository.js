"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor2 = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/applyDecoratedDescriptor"));

var _uuid = _interopRequireDefault(require("uuid"));

var _sparkProtocol = require("spark-protocol");

var _HttpError = _interopRequireDefault(require("../lib/HttpError"));

var _dec, _dec2, _dec3, _dec4, _class;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor2(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context8; _forEachInstanceProperty(_context8 = ownKeys(Object(source), true)).call(_context8, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context9; _forEachInstanceProperty(_context9 = ownKeys(Object(source))).call(_context9, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor2(source, key)); }); } } return target; }

var WebhookFileRepository = (_dec = (0, _sparkProtocol.memoizeSet)(), _dec2 = (0, _sparkProtocol.memoizeSet)(['id']), _dec3 = (0, _sparkProtocol.memoizeGet)(['id']), _dec4 = (0, _sparkProtocol.memoizeGet)(), (_class = /*#__PURE__*/function () {
  function WebhookFileRepository(path) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, WebhookFileRepository);
    (0, _defineProperty2["default"])(this, "_fileManager", void 0);
    (0, _defineProperty2["default"])(this, "count", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _this._fileManager.count());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2["default"])(this, "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var userID,
          allData,
          _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userID = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
              _context2.next = 3;
              return _this._getAll();

            case 3:
              allData = _context2.sent;

              if (!userID) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", (0, _filter["default"])(allData).call(allData, function (webhook) {
                return webhook.ownerID === userID;
              }));

            case 6:
              return _context2.abrupt("return", allData);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    (0, _defineProperty2["default"])(this, "updateByID", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              throw new _HttpError["default"]('Not implemented');

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    this._fileManager = new _sparkProtocol.JSONFileManager(path);
  }

  (0, _createClass2["default"])(WebhookFileRepository, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(model) {
        var id, modelToSave;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = (0, _uuid["default"])(); // eslint-disable-next-line no-await-in-loop

              case 1:
                _context4.next = 3;
                return this._fileManager.hasFile("".concat(id, ".json"));

              case 3:
                if (!_context4.sent) {
                  _context4.next = 7;
                  break;
                }

                id = (0, _uuid["default"])();
                _context4.next = 1;
                break;

              case 7:
                modelToSave = _objectSpread(_objectSpread({}, model), {}, {
                  created_at: new Date(),
                  id: id
                });

                this._fileManager.createFile("".concat(modelToSave.id, ".json"), modelToSave);

                return _context4.abrupt("return", modelToSave);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteByID",
    value: function () {
      var _deleteByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this._fileManager.deleteFile("".concat(id, ".json"));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteByID(_x2) {
        return _deleteByID.apply(this, arguments);
      }

      return deleteByID;
    }()
  }, {
    key: "getByID",
    value: function () {
      var _getByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this._fileManager.getFile("".concat(id, ".json")));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getByID(_x3) {
        return _getByID.apply(this, arguments);
      }

      return getByID;
    }() // eslint-disable-next-line no-unused-vars

  }, {
    key: "_getAll",
    value: function () {
      var _getAll2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this._fileManager.getAllData());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _getAll() {
        return _getAll2.apply(this, arguments);
      }

      return _getAll;
    }()
  }]);
  return WebhookFileRepository;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "create", [_dec], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "create"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "deleteByID", [_dec2], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "deleteByID"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "getByID", [_dec3], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "getByID"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "_getAll", [_dec4], (0, _getOwnPropertyDescriptor["default"])(_class.prototype, "_getAll"), _class.prototype)), _class));
var _default = WebhookFileRepository;
exports["default"] = _default;