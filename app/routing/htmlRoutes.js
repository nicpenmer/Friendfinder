
// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var path = require("path");

// HTML Route Handling
// =============================================================

// Displays the home page
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });

// Displays the survey page
router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});




module.exports = router;