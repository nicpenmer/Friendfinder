// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var path = require("path");


// API Route
// Displays all friends
router.get("/api/friends", function(req, res) {
  return res.json(muppets);
});

// Returns data or returns false
router.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.muppets;

  if(muppets[chosen] !== undefined){
      return res.json(muppets[chosen]);
  } else {
      return res.json(false);
  }
});

//adds new person
router.post("/api/friends", function(req, res) {

  var newBody = req.body;
  var highestDifference = 50;
  var matches = [];
  var scores=[];

  // Loop through muppets toget  total difference 
  for (var i = 0; i < muppets.length; i++) {
    var totalDifference = 0;
    for (var s = 0; s < 10; s++) {
      if(newBody.scores[s] !== muppets[i].scores[s]){
        totalDifference += Math.abs(parseInt(newBody.scores[s]) - parseInt(muppets[i].scores[s])); 
      }
    }
    matches.push({person: i, difference: totalDifference});
  }

  // Review the list of matches to determine match with the lowest difference (best match)
  var bestMatch = {person: null, difference: highestDiff};
  for (var i = 0; i < matches.length; i++) {
    if(matches[i].difference < bestMatch.difference) {
      bestMatch = {
        person: matches[i].person, 
        difference: matches[i].difference
      }
    }
  }

  // Add the new person 
  muppets.push(newBody);

  // Add Match Percentage
  var matchPercentage = Math.round((highestDifference - bestMatch.difference) / highestDifference * 100);
  
  // Update the best match's list
  muppets[bestMatch.person].match = {
    Muppet: (muppets.length - 1), 
    percent: matchPercentage
  };
  
  // Return the best matched muppet as a JSON object
  res.json(muppets[bestMatch.person]);
});

module.exports = router;


///// still needs to make the app actually match data...
