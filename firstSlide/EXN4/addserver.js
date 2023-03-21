var http = require('http');
var url = require('url');
var fs = require('fs');
var addmod = require('./addmod.js');
http.createServer(function (req, res) {
 var q = url.parse(req.url, true);

addmod.add(req,res,q.query)

}).listen(8080);