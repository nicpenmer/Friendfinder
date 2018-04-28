// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//body parsser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HTML Route
// =============================================================
var htmlRoutes = require("./app/routing/htmlRoutes");
app.use('/', htmlRoutes);

// API Route
// =============================================================
var apiRoutes = require("./app/routing/apiRoutes");
app.use('/', apiRoutes);

// listening 
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});