var http = require('http');

http.createServer(function (request, response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('helloworld\n');
	
}).listen(8889);

console.log('Server running');