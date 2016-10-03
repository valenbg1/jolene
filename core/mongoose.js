"use strict";

var mongoose = require("mongoose");
var mongodb_URL = process.env.MONGODB_URI;

if (!mongodb_URL)
    throw new Error("MONGODB_URI env var unset");

var connection = mongoose.createConnection(mongodb_URL);
exports.connection = connection;

connection.on("error",
    function(err) {
        throw new Error("Error on Mongoose connection: " + err);
    });

/*
connection.once("open",
    function() {
        
    });
*/