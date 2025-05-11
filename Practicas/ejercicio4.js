// Descripción: Crear un servidor HTTP que responda a diferentes rutas con diferentes mensajes.
const http = require('http'); // Importar el módulo HTTP de Node.js
const PORT = 3008 // Defino el puerto donde correrá el servidor (3008 en este caso)

// Crear el servidor HTTP con createServer()
// La función callback se ejecuta cada vez que llega una petición al servidor
const server = http.createServer((req, res) => {
    // req = objeto request (información de la petición entrante)
    // res = objeto response (para enviar la respuesta al cliente)
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'}); // Establecer cabecera HTTP (código 200 OK y tipo de contenido HTML)
        res.end('<h1>Bienvenidas a nuestra web</h1>'); // Enviar respuesta con contenido HTML
    }
    else if (req.url === '/Cursos') { // Ruta '/Cursos'
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Bienvenidas a nuestra sección cursos</h1>');
    }
    else if (req.url === '/Contacto') { // Ruta '/Contacto'
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Contactanos en instagram</h1>');
    }
    else { // Para cualquier otra ruta no definida (404 Not Found)
        res.writeHead(404, {'Content-Type': 'text/html'});  //text/plain?
        res.end('<h1>404 Not Found</h1>');
    }
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
