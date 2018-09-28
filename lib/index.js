"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("../src/components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApp(props) {
  return _react.default.createElement("main", null, _react.default.createElement(_App.default, null));
}

_reactDom.default.render(_react.default.createElement(createApp), document.getElementById('root'));