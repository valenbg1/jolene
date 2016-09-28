"use strict";

var express = require("express");
var session = require("./config/session");
var app = express();

var passport = require("passport");
require("./config/passport");

var loginRoute = require("./routes/login");
var loggedinRoute = require("./routes/loggedin");

app.use("/", express.static("public"));

app.use(session);

app.use(passport.initialize());
app.use(passport.session());

app.use("/login", loginRoute);
app.use("/loggedin", loggedinRoute);

app.get("/*",
    function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });
    
module.exports = app;