"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./route/web"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require('dotenv').config();
var app = (0, _express["default"])();

// Config app
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));

// Initialize view engine and routes
(0, _viewEngine["default"])(app);
(0, _web["default"])(app);

// Set port
var port = process.env.PORT || 6969;

// Start server
app.listen(port, function () {
  console.log("Backend Node.js is running on the port: ".concat(port));
});

// Simple example route
app.get("/", function (req, res) {
  res.send("Hello, world!");
});
