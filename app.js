require('node-jsx').install();
var http = require('http');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Hello =  React.createFactory(require('./react-components/Hello'));

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html", 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET'});
  response.end(ReactDOMServer.renderToString(  Hello({})  ));
});

server.listen(7777);

console.log("Server running at 'your server ip address':7777");
