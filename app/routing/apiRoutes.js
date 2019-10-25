//THIS PAGE MAY BE PART OF THE ISSUE BUT NOTHING I TRIED WORKED.

// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendData = require("../data/friends.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("./app/data/friends.js", function(req, res) {
    res.json(friendData);
  });

  //PSEUDO:: WHEN THE DATA IS REQUESTED OR NECESSARY FOR COMPLETING FUNCITONALITY, THIS IS THE BLOCK OF CODE THAT
  //PSEUDO::    REFERENCES THE 'FRIENDS.JS' FILE THROUGH A 'GET' ROUTE.

  // API POST Requests
  // ---------------------------------------------------------------------------



  //THIS IS WHERE THE MAGIC HAPPENS.
  app.post("/app/data/friends.js", function(req, res) {
    
    friendData.push(req.body);
    
  });

  //PSEUDO:: WHEN A NEW INDIVIDUAL IS ATTEMPTING TO USE THE SERVICE, THE DATA THEY ENTER IS 'PUSHED' HERE TO THE 'FRIENDS.JS' FILE UNDER DATA.
  //PSEUDO::    REFERENCES THE 'FRIENDS.JS' FILE THROUGH A 'POST' ROUTE.

};
