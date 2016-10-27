var http = require('http');
function onRequest(request,response)
{


  console.log("A user made a request : "+request.url);
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Here is some data");
  response.end();
}
http.createServer(onRequest).listen(51996);
console.log("server is now running..");
