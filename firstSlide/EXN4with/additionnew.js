

const express=require('express')

const app=express();

app.use(express.urlencoded({extended:false}));

var q = url.parse(req.url, true);
    var qdata=q.query;
var filename = "." + q.pathname;
if (q.pathname=="/cal.js")
{
    if(qdata.operation=='add'){
app.get('/add', (req, resp)=>{

    var sum=parseInt(req.body.first)+ parseInt(req.body.second);

  
    resp.end(`${sum}`);
})
    }
    else if(qdata.operation=='sub'){

app.get('/sub', (req, resp)=>{

    var sum=parseInt(req.query.first)- parseInt(req.query.second);

  
    resp.end(`${sum}`);
})
    }

    else if (qdata.operation=='mult'){

app.get('/mult', (req, resp)=>{

    var sum=parseInt(req.query.first)* parseInt(req.query.second);

  
    resp.end(`${sum}`);
})
    }

    else if(qdata.operation=='div'){
  

app.get('/div', (req, resp)=>{

    var sum=parseInt(req.query.first)/parseInt(req.query.second);

  
    resp.end(`${sum}`);
})
    }
}

app.listen(3000);
