const {console} = require ('console');
const http = require('http');
const PORT = 3008

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Bienvenidas a nuestra web</h1>');    
    }
    else if (req.url === '/Cursos') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Bienvenidas a nuestra sección cursos</h1>');
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Contactanos</h1>');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('<h1>404 Not Found</h1>');
    }
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})