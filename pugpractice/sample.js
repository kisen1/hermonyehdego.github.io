const express=require("express");
const app=express();

const pug=require("pug");


app.set('view engine', 'pug');

app.get('/', function(req, res){
   // res.locals={title:"hermon yehdego"};
    res.render('firstpug', 
   {title:'Express Pug', message:'Devnami Express PUG template'})
})

app.listen(3000)