var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

var port = process.env.PORT || 3000;

app.listen(port);