"use strict";

var express = require("express");
var session = require("./config/session");
var app = express();

var passport = require("passport");
require("./config/passport");

var loginRoute = require("./routes/login");

app.use("/", express.static("public"));

app.use(session);

app.use(passport.initialize());
    
app.use(passport.session());

app.use("/login", loginRoute);

app.get("/*",
    function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });
    
module.exports = app;