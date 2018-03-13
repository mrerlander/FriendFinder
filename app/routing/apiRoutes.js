var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var friends = require("../data/friends")

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/friends", function(req, res){
    res.json(friends);
});

router.post("/friends", function(req, res){
    var surveyResults = req.body;
    var answerArr = surveyResults.answers;
    
    
    var diff = 0;
    var diffs = [];

    for (var i = 0; i < friends.length; i++){
        var diff = 0;
        for (var l = 0; l < answerArr.length; l++){
            if (parseInt(answerArr[l]) > parseInt(friends[i].answers[l])){
                diff += parseInt(answerArr[l]) - parseInt(friends[i].answers[l]);
            } else {
                diff += parseInt(friends[i].answers[l]) - parseInt(answerArr[l])
            }
        }
        diffs.push(diff);
    }

    var match = diffs.indexOf(Math.min(...diffs));
    
    res.send(friends[match]);
    friends.push(surveyResults);
});

module.exports = router;