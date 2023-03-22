dates=require('./mymodule');
http=require('http');

//dates();


http.createServer(function(req, resp){
resp.writeHead(200, {'content-type':'text/html'});

resp.write('the dat and time of today is '+dates.myDate());

}).listen(8080);