// INCOMPLETE // -------- App is not define ------------

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

// // Parse the Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // Get the CSS stylesheet
app.use(express.static("app/public"));


// Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app); // This part does not work....

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});
