var http = require("http");

var server = http.createServer(function(req,res){

	res.writeHead(200, {"content-Type":"text/plain"});
	res.end("Hello world!!");
});
server.listen(8000, function(){
	
})