"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/App"));

var _facts = _interopRequireDefault(require("./src/facts"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 3000;

var index = _fs["default"].readFileSync(__dirname + '/../public/index.html', 'utf8');

var app = (0, _express["default"])();
app.get('**', function (req, res) {
  (0, _facts["default"])().then(function (facts) {
    var html = (0, _server.renderToString)(_react["default"].createElement(_App["default"], {
      facts: facts
    }));
    var finalHtml = index.replace('<!-- ::APP::  -->', html);
    res.set('Cache-control', 'public max-age=600 s-max-age=1200');
    res.send(finalHtml);
  });
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});