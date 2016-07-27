var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeJS World\n");
});

server.listen(7777);

console.log("Server running at http://127.0.0.1:7777/");
