"use strict";

var express = require("express");
var router = express.Router();

router.use(
    function(req, res, next) {
        if (req.isAuthenticated())
            next();
        else
            res.sendStatus(401);
    });

module.exports = router;