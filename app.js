
// Carregar modulos
const http = require("http");
const url = require("url");
const fs = require("fs");


function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data)
    })
}


var callback = function(request, response){
    response.writeHead(200, {"Content-type": "text-plain"});
    var parts = url.parse(request.url);

    if(parts.path == "/"){
        response.writeHead(200, {"Content-type": "text-plain"});
        readFile(response, "index.html");
    } else(parts.path == "/julia")
}


// Criar e configurar um servidor http
var server = http.createServer(callback)
server.listen(3000)
console.log("Servidor iniciando na porta: http://localhost:3000/")