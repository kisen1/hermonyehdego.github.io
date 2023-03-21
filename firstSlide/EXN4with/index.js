
const express=require('express');

const path=require("path");
const app =express();

//var url=require('url');

// const bodyParser=require('body-parser');
// app.use(express.urlencoded({extended:false}))

//const urlencodedParser=bodyParser.urlencoded({extended:false})




//start here 
app.use(express.urlencoded({extended:false}));

app.use ((req, res, next)=>{
    console.log(`this middleware is always run`);
    next();
});


app.get("/", (req, res, next)=>{
    console.log(`in the homeage http-get route's middleware`);
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


app.get("/product-form", (req, res, next)=>{
    console.log(`in the product-form http-get route's middleware`);
    res.sendFile(path.join(__dirname, "views", "product-form.html"));
});


app.post("/product", (req, res, next)=>{




    console.log(`in the add-product http-get route's middleware`);
    console.log(`Adding New Product data:`);



  




//     var q=url.parse(req.url, true).query;
//    var text=req.query.productNo+ " "+req.query.productName+" "+req.query.unitPrice;
//    res.end(text);

 const queryString=`productNo=${req.body.productNo}&productName=${req.body.productName}&UnitPrice=${req.body.unitPrice}`;
   const redirectUrl=`/confirm-product-added?${queryString}`;
   res.redirect(303,redirectUrl);

 
});

app.get("/confirm-product-added", (req, res, next)=>{
    console.log(`In the confirm-product-added middleware`);



    console.log(`Product No:${req.query.productNo}`); 
    console.log(`Product Name:${req.query.productName}`);
    console.log(`Unit Price:${req.query.unitPrice}`);


    const productDataConfirmationPageContent=`
 <!DOCTYPE html>

<html lang="en">
    <head>

    </head>

    <body>
        <h1>Welcome to the Product Type</h1>
      
        <section>
            <p>Product No:${req.query.productNo}</p>
            <p>Product Name:${req.query.productName}</p>
            <p>Unit Price:${req.query.unitPrice}</p>
        </section>

        <a href="/">Home Page</a>
    </body>
</html>
 `;
 res.send(productDataConfirmationPageContent);
 res.end();
})

app.listen(3000);