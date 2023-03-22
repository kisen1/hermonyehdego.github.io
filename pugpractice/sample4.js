var express = require('express');
var app = express();


app.get('/', function (req, res) {
    var sql = require("mssql");

 var config = {
user: 'root',
password: '1234',
server: 'localhost',
database: 'products-db'

};

sql.connect(config, function(err){

// connect to your database sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();


   // query to the database and get the records
request.query('select * from Student', function (err, recordset) {
    if (err) console.log(err)
    // send records as a response
    res.send(recordset);
}); 

});



});





var server = app.listen(5000, function () { // start the server console.log('Server is running..');
}); 