


/*

helloworld.js 
@author hermon
*/
console.log('starting HTTP web server for hello world');

const http=require('http');


// creat and start an httpserver 


http.createServer(function(req, resp){
    resp.writeHead(200, {
        "content-type":"text/html"
    });
const pageContent=`
<!doctype html>
<html lang="en">
</html>
<head>
<title>my hello world where are you </title>
</head>
<body>
<h1>what is your name</h1>
</body>
</html>
`;
    resp.end(pageContent);

}).listen(8080);




