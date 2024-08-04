"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getData;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// AXIOS

function getData(url) {
  var response = _axios["default"].get(url).then(function (response) {
    return response.data;
  })["catch"](function (error) {
    return error;
  });
  return response;
}