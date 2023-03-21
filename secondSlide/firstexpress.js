const express= require('express')

const app=express();

app.get('/',(req, resp)=>{
    console.log("here");
    resp.send("hi hermon")
})


app.get('/users',(req, resp)=>{
    console.log("here");
    resp.send("hi users list")
})


app.get('/users/new',(req, resp)=>{
    console.log("here");
    resp.send("hi users new form ")
})

app.listen(3000)