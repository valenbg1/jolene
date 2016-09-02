"use strict";

var express = require("express");
var app = express();

app.use("/", express.static("public"));

app.get("/*",
    function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

var port = process.env.PORT || 8080;
app.listen(port,
    function() {
        console.log("Node.js listening on port " + port + "...");
    });