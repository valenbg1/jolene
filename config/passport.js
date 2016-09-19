"use strict";

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        if (password === "passwd")
            return done(null, {username: username});
        else
            return done(null, false, {message: "Incorrect username or password."});
    }));
    
passport.serializeUser(
    function(user, done) {
        done(null, user);
    });

passport.deserializeUser(
    function(user, done) {
        done(null, user);
    });