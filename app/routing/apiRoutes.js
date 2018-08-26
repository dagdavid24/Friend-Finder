var express = require("express");
var path = require("path");
var app = express();
var friends = require("/../data/friends.js");
var PORT = process.env.PORT || 8081;

//ROUTES
app.get("/api/friends", function (req, res) {
    res.json(friends)
});

app.post("/api/friends", function (req, res) {

})


//Begin server LISTENING
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});