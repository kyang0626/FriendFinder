
var friends = require("../data/friends.js"); 


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
    
    var totalDifference = 0;
        // Best Match
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
    var userData = req.body;
    var userName = userData.scores;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
        return parseInt(item,10);
    });

    userData = {
        name: req.body,
        photo: req.photo,
        scores: b
    };

    console.log("Name: " + userName);
    console.log("User score: " + userScores);

    var sum = b.reduce((a, b) => a + b, 0); 
        console.log("Sum of UserScore: " + sum);
        console.log("Best match friend difference: " + bestMatch.friendDifference);
        console.log("---------------------------");

        for (var i = 0; i < friends.length; i++) {
            console.log(friend[i].name);
            totalDifference = 0;
            console.log("Total difference: " + totalDifference);
            console.log("Best match friend difference: " + bestMatch.friendDifference);

            var bfriendScore = friends[i].scores.reduce((a,b) => a + b);
            console.log("Total difference score: " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("--------------------------------" + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatchName.name = friends[i].name;
                bestMatchPhoto.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;

            }
            console.log(totalDifference + "Total difference");
        }
        console.log(bestMatch);
        friends.push(userData);
        console.log("New user has been added.");
        console.log(userData);
        res.json(bestMatch);
	});
}