var express = require("express");
var router  = express.Router();
var bodyParser = require("body-parser");
var friends = require("../data/friends");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/friends", function(req, res){
    res.json(friends);
});

router.post("/friends", function(req, res){
    var results = req.body;

})