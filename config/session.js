"use strict";

var session = require("express-session");
var secret = process.env.SESSION_SECRET;

if (!secret)
    throw new Error("SESSION_SECRET env var unset");

module.exports = session({
        secret: secret,
        resave: false,
        saveUninitialized: true
    });