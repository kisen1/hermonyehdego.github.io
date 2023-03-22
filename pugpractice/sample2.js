


const express=require("express");
const app=express();
const mysql=require('mysql')


const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'products-db'
})








//connect to your database

con.connect( (err)=>{
    if(err) {
            console.log(err);
    }else{
        console.log("connected")
    }
})
   

app.get('/',  (req, res)=>{

  con.query("select * from products", function(err, result, fields){
    if(err){
        console.log(err)
    }
    else{
        res.send(result)
    }
  });

});

app.listen(3000, (err)=>{
    if(err){
        console.log(err)
    }
    else{
       console.log("on port 3000")
    }
});
