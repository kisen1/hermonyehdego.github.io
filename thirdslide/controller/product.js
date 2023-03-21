const Product = require('../model/product')

exports.getAllProducts = (req, res, next) => {
 console.log(Product.getProducts)
    
    // res.locals = Product.getProducts();
    res.render('test', {products: Product.getProducts()})
}

exports.saveProduct = (req, res, next) => {
    const usr1 = new Product(1001, "Apple ipone15", 1700 )
    const usr2 = new Product(1001, "Apple ipone15", 1700 )
    const usr3 = new Product(1001, "Apple ipone15", 1800 )
    usr1.addProduct()
    usr2.addProduct()
    usr3.addProduct()
}