/**
 * index.js
 * 
 * 
 * sameorgin and cross orgin 
 * jason expresion
 * middleware
 */

"use strict";


const express=require("express");
const path=require("path");
const app=express();

const homeRoutes=require("./routes/home/home");
const productRoutes=require("./routes/product/product");
app.set("Views",path.join(__dirname,"Views")); //for html to be viewed

app.set("Views engine","pug"); //for pug files



app.use(express.urlencoded({extended:false}));


app.use("", homeRoutes);
app.use("/product", productRoutes);

// Define a Middle Ware



//Set folder name Public for all static


app.use("/static",express.static(path.join(__dirname, "public")));



/*
we send this to routes home 
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"Views","index.html")); 
});


app.use((req, res, next)=>{
    console.log(`responding by redirecting to the 404 error page`);
    res.status(404).redirect(303, "/static/html/404.html");

});

*/

const PORT_NUMBER=3000;

app.listen(PORT_NUMBER, ()=>{
    console.log(`server started listning on prot ${PORT_NUMBER}`);
});

console.log(`server starting ... please wait`)





