exports.add = function (req,res,vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(`${sum }`);
     return res.end();
    };