"use strict";

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var passport = require("passport");

router.post("/", 
    function(req, res, next) {
        console.log("POST req to /login!");
        next();
    },
    bodyParser.json(),
    passport.authenticate("local", {session: false}),
    function(req, res) {
        console.log("auth successful!");
        res.end();
    });

module.exports = router;