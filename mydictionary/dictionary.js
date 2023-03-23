var express = require("express");
var bodyParser = require("body-parser"); // for parsing the body
var path = require("path"); // module used for working with path related stuff
var search = require("./word");

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// This is the home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dict.html"));
});

// This is the search page
app.post("/search", function (req, res) {
  search.wordMeaning(res, req.body.searchTerm).then((rows)=>{
    res.status(200).json(rows);
    console.log("here" + rows);
  }).catch((err)=>{
    res.status(500).json(err)
  })
});

var server = app.listen(8080, function () {
  console.log("Server is running on port 8080...");
});
