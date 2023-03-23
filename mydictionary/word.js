var mysql = require("mysql");

// configration file
var connection = mysql.createConnection({
  user: "root",
  password: "1234",
  server: "localhost",
  database: "entries",
  
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

exports.wordMeaning = function (res, searchterm) {

  return new Promise((resolve,reject)=>{
    connection.query('select * from entries where word='+ mysql.escape(searchterm),function (err, rows) {
    if(err){
         console.log(err)
         reject(err);
     }
     else{
       //res.status(200).json(rows);
       resolve(rows);
       //  res.send(result)
     }
 

  })


    }
  );
};
