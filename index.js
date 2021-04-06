var http = require('http');

http.createServer(function (req, res){
    res.end('Long dep trai');
}).listen(process.env.port || 6969);