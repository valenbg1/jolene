"use strict";

var app = require("./app");

var http = require("http");

var port = process.env.PORT || 8080;

app.set("port", port);

var server = http.createServer(app);

server.listen(port,
    function() {
        console.log("Node.js listening on port " + port + "...");
    });