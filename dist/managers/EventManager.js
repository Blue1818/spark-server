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

var EventManager = /*#__PURE__*/function () {
  function EventManager(eventPublisher) {
    (0, _classCallCheck2["default"])(this, EventManager);
    (0, _defineProperty2["default"])(this, "_eventPublisher", void 0);
    this._eventPublisher = eventPublisher;
  }

  (0, _createClass2["default"])(EventManager, [{
    key: "subscribe",
    value: function subscribe(eventNamePrefix, eventHandler, filterOptions) {
      return this._eventPublisher.subscribe(eventNamePrefix || undefined, eventHandler, {
        filterOptions: filterOptions
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(subscriptionID) {
      this._eventPublisher.unsubscribe(subscriptionID);
    }
  }, {
    key: "publish",
    value: function publish(eventData) {
      this._eventPublisher.publish(eventData);
    }
  }]);
  return EventManager;
}();

var _default = EventManager;
exports["default"] = _default;