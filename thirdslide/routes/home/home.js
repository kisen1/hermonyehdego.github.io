const express =require('express');
const path=require('path');
const homeRouter =express.Router();

homeRouter.get("/", (req, res, next)=>{
    console.log(`Redirecting to the static homepage url`);
      res.redirect("/static/html/index.html");
   // res.sendFile(path.join(__dirname, "../../views", "index.html"));

});

homeRouter.get("/home", (req, res, next)=>{
    console.log(`presenting homepage 2`);

    res.sendFile(path.join(__dirname, "../../views", "index.html"));

});

module.exports=homeRouter;