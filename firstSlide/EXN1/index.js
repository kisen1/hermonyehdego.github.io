var http= require('http');

http.createServer(function(req, resp){
    resp.writeHead(200, {'content-type':'text/html'});
    resp.end("hello hermon");
}).listen(8080);