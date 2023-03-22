var http = require('http');
var fs = require('fs'); 
http.createServer(function (req, res) {


    var data =fs.readFileSync('dummyfile.txt','utf8');
   console.log(data);

//   fs.readFile('demo.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//});
 }).listen(8080);