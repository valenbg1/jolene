"use strict";

var session = require("express-session");
var secret = process.env.SESSION_SECRET;

var MongoStore = require('connect-mongo')(session);
var db = require("./mongoose");

if (!secret)
    throw new Error("SESSION_SECRET env var unset");

module.exports = session({
        cookie: {
            maxAge: 1 * 60 * 60 * 1000 // 1h (ms)
        },
        secret: secret,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: db.connection,
            touchAfter: 30 * 60 // 30mn (s)
        })
    });