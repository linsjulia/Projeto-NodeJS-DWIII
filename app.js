// Carregar modulos
const http = require("http");
const url = require("url");
const fs = require("fs");


function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}


var callback = function(request, response){
    var parts = url.parse(request.url);

    if(parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "index.html");
    } 
    else if(parts.path == "/Julia"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "index.html");
    } 
    else if(parts.path == "/Vitor"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "index.html");
    } 
    else {
        response.writeHead(404, {"Content-type": "text/plain; charset=utf-8"});
        response.end("Página não encontrada!");
    }
};


// Criar e configurar um servidor http
var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciando na porta: http://localhost:3000/");