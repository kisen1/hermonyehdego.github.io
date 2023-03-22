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
  connection.query('select * from entries where word = "' + searchterm + '"',function (err, rows) {
     // if (err) throw err;
      //   res.send(rows);
      

   if(err){
        console.log(err)
    }
    else{
      res.status(200).json(rows);
      //  res.send(result)
    }



    }
  );
};
