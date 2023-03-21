/**
 * product.js
 */
"use strict";



function Product(productNo,productName,unitPrice){
    
    this.productNo=productNo;
    this.productName=productName;
    this.unitPrice=unitPrice;
}

exports.Product=Product; 
// const products = [];
// module.exports = class Product{
//     constructor(productNo,productName,unitPrice){
//         this.productNo=productNo;
//         this.productName=productName;
//         this.unitPrice=unitPrice;
//     }

//     static getProducts(){
//         return products;
//     }

//     addProduct(){
//         products.push(this)
//     }
// }