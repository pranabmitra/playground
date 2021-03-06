"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFacts;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFacts() {
  return (0, _isomorphicFetch["default"])('https://jsonplaceholder.typicode.com/todos').then(function (res) {
    return res.json();
  });
}