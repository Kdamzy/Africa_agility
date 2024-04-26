//HTTP MODULES
//SERVER AND CLIENT SIDE COMMUNICATION

//import http module(http is an inbuilt module)
const http = require('http');

const port = 3000
const hostname = '127.0.0.1'

//create Server on http
http.createServer(function(req,res){
   res.statusCode = 200;
   res.setHeader('content-Type','text/html');
   //combination of status code and setheader
   //res.writeHead(200, {'Content-Type':'test/html'});
   res.write('WELCOME TO OUR FIRST BACKEND SERVER');
   res.end();
}).listen(port);

