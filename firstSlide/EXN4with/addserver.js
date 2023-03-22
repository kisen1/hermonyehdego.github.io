var express = require('express');
 
const app=express();

var addmod = require('./addmod.js');
const bodyParser=require('body-parser');
//app.use(express.urlencoded({extended:false}))

const urlencodedParser=bodyParser.urlencoded({extended:false})

app.get('/heri', urlencodedParser, (req, resp, next)=>{
    var sum = parseInt(req.query.first) + parseInt(req.query.second);
    resp.send(`${sum }`);
     resp.end();
    //addmod.add(req, resp,req.query)
});



app.listen(3000)