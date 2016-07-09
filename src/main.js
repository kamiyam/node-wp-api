"use strict";

var ReactDOM = require("react-dom");
var routes = require("./routes");

require("./global.scss");

ReactDOM.render(routes, document.getElementById("content"));
