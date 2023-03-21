"use strict";

const Product=require("../../model/product");

  const productDAO =function(){

   console.log("there is something here 1");


     const getProducts =function(){
      
    console.log("there is something here 2");
        const products=[];
        products.push(new Product(1001, "Apple ipone15", 1700 ));
        products.push(new Product(1002, "samsong", 1200));
        products.push(new Product(1003, "google", 1300));
    
        return products;

    }

    return{
        
        getProducts:getProducts
    }
   
};

module.exports.productDAO=productDAO;