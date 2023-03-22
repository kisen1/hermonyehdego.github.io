
const express= require('express')

const app=express();


app.use((req, res, next) => {
     console.log('This is always run');
      next();
});
app.use('/add-product', (req, res, next) => {
     console.log('In the middleware!');
     const addproductpagecontent=`
     <!doctype html>
     <html lang="en">
     <head>
     <title>Add product</title>
     </head>
     <body>
     <h1> Here is the add product page</h1>
     <section>
     <h2>product informatio will go here</h2>
     </section>
     </body>
</html>
     `
     ;
      res.send(addproductpagecontent);
});
app.use('/', (req, res, next) => { 
    console.log('In another middleware!');
     res.send('<h1>Hello from Express</h1>');
});


app.listen(3000)