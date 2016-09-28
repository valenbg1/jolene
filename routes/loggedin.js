"use strict";

var express = require("express");
var router = express.Router();

var isAuthenticated = require("../core/isAuthenticated");

router.get("/",
    isAuthenticated,
    function(req, res) {
        res.json(req.user);
    });

module.exports = router;