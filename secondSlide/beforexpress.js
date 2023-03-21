const http=require('http');

const fs=require('fs');

const server =http.createServer((req,res)=>{


    const url=req.url;

    if(url==='/'){
    
        res.end("hello hermon");
    }

    if(url==='/message'){
        res.end("hello luwam");
    }
});



server.listen(8080);