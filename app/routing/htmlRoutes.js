var path = require("path");
// var express = require("express");

// var app = express();
// var PORT = 3000;

module.exports = function (app) {
    // Home Page
    // Get CSS Stylesheet for home page
    app.use(express.static(path.join(__dirname, '../public')));
    //Get Home Page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


    // Survey Page
    // Get CSS Stylesheet for survey page
    app.use(express.static(path.join(__dirname, '..public')));
    // Get Survey Page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}






