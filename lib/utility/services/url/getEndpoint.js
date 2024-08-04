"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getEndpoint;
function getEndpoint(url, endpoint) {
  var endpointUrl = "".concat(url, "/").concat(endpoint);
  return endpointUrl;
}