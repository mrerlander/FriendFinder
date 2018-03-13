var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

router.get("/", function(req, res){
    res.sendFile(path.join(process.cwd(), "/app/public/home.html"));
});

router.get("/survey", function(req, res){
    res.sendFile(path.join(process.cwd(), "/app/public/survey.html"));
});

module.exports = router;