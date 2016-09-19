"use strict";

var express = require("express");
//var cookieParser = require("cookie-parser");
//var bodyParser = require("body-parser");
//var session = require("express-session");
var app = express();

var loginRoute = require("./routes/login");

var passport = require("passport");
require("./config/passport");
    
app.use("/", express.static("public"));

app.use(passport.initialize());

app.use("/login", loginRoute);

app.get("/*",
    function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });
    
module.exports = app;