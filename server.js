"use strict";

var express = require("express");
var app = express();

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log("Checking user (" + username + ", " + password + ")...");
        
        if ((username === "vblanco") && (password === "passwd")) {
            console.log("User OK!");
            return done(null, {username: "vblanco", password: "passwd"});
        } else {
            console.log("User NOT OK!");
            return done(null, false, {message: "Incorrect username or password."});
        }
    }));

app.use("/", express.static("public"));

app.use(passport.initialize());

app.post("/login", passport.authenticate("local", {session: false}),
    function(req, res) {
        
    });

app.get("/*",
    function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

var port = process.env.PORT || 8080;
app.listen(port,
    function() {
        console.log("Node.js listening on port " + port + "...");
    });