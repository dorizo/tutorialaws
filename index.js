var http = require('http');
const hostname = '3.84.2.133';
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3000 , hostname , () => {

    console.log(`Server running at http://${hostname}:${port}/`);
  
  });