
var express = require('express');
 
const app=express();


app.use((req, res, next) => { 
    console.log('This is always run');
      next();
});
app.use('/add-product', (req, res, next) => { 
    console.log('In the middleware!');
   const addProductPageContent = `
    <!doctype html>
    <html lang="en">
    <head>
    <title> Add product</title>
    </head>
    <body>
    <h1>here is the add product page</h1>
</section>
    <footer>
<a href="/">Go back to the homepage
    </a>
    </footer>
    </body>
    </html>`;
     res.send(addProductPageContent);
});
app.use('/', (req, res, next) => { 
    console.log('In another middleware!'); 
    const homePageContent=`
    <! type html>
    <html lang="en">
    <head>
    <title>Home</title>
    </head>
    <body>
    <h1>Welcome to my Express webapp 2</h1>
    <section>
    <h2> Here is the homepage</h2>
    <a href="/add-product">Gp to the Add product page</a>
    </section>
    </body>

    </html>
    `;
    res.send(homePageContent);
});



app.use((req,res,next)=>{
console.log(`Responding with a 404 Error page`)
res.status(404).sendFile(path.join(__dirnam, "views", "404.html"));
})


app.listen(3000)