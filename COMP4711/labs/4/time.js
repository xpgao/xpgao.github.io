let port = 8080;
let serverUrl = "127.0.0.1";
let moment = require('moment');
let date = moment().format();
let http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type':'text/plain'});
  // response.write("Response's coming from server ...\n");
  response.write(date);
  response.end();
})
// .listen(8080);
.listen(port, serverUrl);
console.log('listening...');