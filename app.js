// Carregar modulos
const http = require("http");
const url = require("url");
const fs = require("fs");

// Módulo que lê arquivos
function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}


// Função Callback
var callback = function(request, response){
    var parts = url.parse(request.url);

    // Rota principal do projeto
    if(parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "index.html");
    } 

    // Rotas de apresentação: Júlia
    else if(parts.path == "/julia"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "julia/index.html");
    } 
    else if(parts.path == "/julia/sobre"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "julia/sobre/sobre.html");
    } 
    else if(parts.path == "/julia/curriculo"){
        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "julia/curriculo/curriculo.pdf");
    }

    // Rotas de apresentação: Vitor
    else if(parts.path == "/vitor"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "vitor/index.html");
    } 

    else if(parts.path == "/vitor/sobre"){
        response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(response, "vitor/sobre/sobre.html");
    } 
    else if(parts.path == "/vitor/curriculo"){
        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "vitor/curriculo/curriculo.pdf");
    }
    
    // Rota de apresentação do projeto
    else if (parts.path == "/projeto"){
        response.writeHead(200, {"Content-type": "application/pdf"})
        readFile(response, "projeto/documentacao.pdf")
    }

    // Caso não tenha sido encontrada nenhuma rota
    else {
        response.writeHead(404, {"Content-type": "text/plain; charset=utf-8"});
        response.end("Página não encontrada!");
    }
};


// Criar e configurar um servidor http
var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciando na porta: http://localhost:3000/");