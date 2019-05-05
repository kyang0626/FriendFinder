var app = require("express");
var PORT = 3000;

var friends = [
    {
        name: "John Snow",
        photo: "../public/images/jon.jpg",
        scores: [
            5,
            3,
            2,
            5,
            4,
            3,
            2,
            3,
            3,
            3
        ]
    },
    {
        name: "Daeneyres Targaryen",
        photo: "../public/images/daenerys.jpg",
        scores: [
            2,
            1,
            2,
            3,
            4,
            1,
            2,
            3,
            1,
            1
        ]
    },
    {
    
        name: "Tyrion Lannister",
        photo: "../public/images/tyrion.jpg",
        scores: [
            5,
            3,
            2,
            5,
            4,
            3,
            2,
            3,
            3,
            3
        ]
    }
];

//export the data
module.exports = friends;