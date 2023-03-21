var http = require("http");
const { URL } = require("url");
var fs = require("fs");
var output = require('./numberquize.js');

http.createServer(function (req, res) {
    var q = new URL(req.url, "http://localhost:8085/");
    output.guessnumber(req, res, q.searchParams);
  })
  .listen(8080);