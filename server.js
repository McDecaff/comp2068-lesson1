/**
 * Created by Nick on 2016-09-08.
 */

var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200); //status ok
    response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');