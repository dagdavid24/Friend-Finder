var express = require("express");
var path = require("path");
var app = express();
var PORT = 8081;

//ROUTES
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

//Begin server listening
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});