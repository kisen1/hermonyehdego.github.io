
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "1234",
  password: "1234",
  database: "entries",
});

module.exports = con;
// con.connect(function (err) {
//   if (err) throw err;
// });
// function getWord(query,callback){
//     con.query("SELECT * FROM entries where word='"+query+"'", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         callback(result);
//       });
// }



