"use strict";

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