const http=require('http');

var dt=require('./mymodule');


http.createServer(function(req, resp){


    resp.writeHead(200, {'cotent-type': "text/html"});

    resp.write("the date nd time are currently:" +dt());

    resp.end();
}).listen(8080);