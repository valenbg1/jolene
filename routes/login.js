"use strict";

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var passport = require("passport");

router.post("/",
    bodyParser.json(),
    passport.authenticate("local"),
    function(req, res) {
        res.end();
    });

module.exports = router;