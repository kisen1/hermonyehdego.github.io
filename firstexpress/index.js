const express=require('express');

const app=express();
/*
app.use('/',(req, res,next)=>{
    console.log('serving homepage');

    const content=`
    <!doctype html>
    <html lang='en'>
    
    <head>
    >/head>

    <body>
    <h1>welcome to my first express</h1>
    </body>

    </html>
    `;
    res.send(content);
});

*/


app.get("/", (req,res)=>{
    console.log("here")
  //  res.send("hi");
    res.json({message:"error here"})
})





app.get("/users", (req, resp)=>{
    resp.send("user lists")
})


app.get("/users/new ", (req, resp)=>{
    resp.send("user lists form new ")
})

const userRouter=require('./routes/users')

app.use('/users', userRouter)
app.listen(3000);