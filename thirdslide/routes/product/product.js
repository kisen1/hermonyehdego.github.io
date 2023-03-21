/**
 * product.js
 */
"use strict";

const express=require("express");

const path=require("path")

const productRouter=express.Router();

const product=require("../../model/product");
 const productDAO=require("../../db/dao/productDAO");
//const productDAO=require("../../controller/product");
//const getproducts= require("../../db/dao/productDAO");
productRouter.get("/list", (req, res, next)=>{
    console.log(`resenting list of products page`);
     const products= productDAO.getproducts();
    //const getproducts= productDAOs.productDAO();
    console.log(products);
   res.locals={products};
  res.render("product-list");
  
    // res.sendFile(path.join(__dirname, "../../views","product-list.pug"))
});

// productRouter.get('/list', (req, res, next) =>{
//     const prod = productDAO.getAllProducts()
//     res.locals= {prod};
//   res.render("test")
    
// }



module.exports=productRouter;