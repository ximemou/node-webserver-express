const http = require('http');


http.createServer((request, response) => {


        response.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Juan',
            edad: 54,
            url: request.url

        };
        response.write(JSON.stringify(salida));
        //response.write('Hola mundo');
        response.end();
    })
    .listen(8080);

console.log('Esuchando en el puerto 8080');