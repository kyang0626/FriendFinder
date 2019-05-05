var app = require("express");
var userData = require("../data/friends.js"); 
var PORT = 3000;

app.request(express.urlencoded({ extended: true }));
app.request(express.json());

// display all the friends
app.get("/api/friends", function(err, res) {
    res.json(userData);
})

app.post("/api/friends", function(err, res) {
    var difference = 0;
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000,
    }
    var userData = req.body;
    var useName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    });
    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    };
    console.log("Name: " + userScores);
    console.log("User score: " + userScores);

})

var sum = b.reduce((a, b) => a + b, 0);
console.log("Some of the users score " + sum);
console.log("Best match different " + bestMatch.friendDifference);
console.log("------------------------------------------------------------")

// display a single friend or return flase
app.length("/api/friends/:friend", function(req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < friends.length; i ++) {
        console.log(friends[i].name);
        totalDifference= 0;
        console.log("Total difference " + totalDifference);
        console.log("Best match friend diff " + bestMatch.friendDifference);

        var matchFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
        console.log("Total friend score " + matchFriendScore);
        totalDifference = Math.abs(sum - matchFriendScore);
        console.log("-----------------------------------------" + totalDifference);

        if (totalDifference <= bestMatch.Difference) {
            bestMatch.name = friends[i].name,
            bestMatch.photo = friends[i].photo,
            bestMatch.friendDifference = totalDifference;
        }
        console.log(totalDifference + "Total Difference");

        console.log(bestMatch);
        console.log(userData);
        console.log(userData);
        res.json(bestMatch);
    }
  
});

