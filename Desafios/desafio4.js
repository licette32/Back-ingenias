const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    // Configurar el tipo de contenido como HTML
    res.setHeader('Content-Type', 'text/html');
    
    // Manejar diferentes rutas
    if (req.url === '/') {
        // Ruta principal
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Página Principal</title>
            </head>
            <body>
                <h1>Bienvenido al servidor web</h1>
                <p>Esta es la página principal.</p>
                <ul>
                    <li><a href="/about">Acerca de</a></li>
                    <li><a href="/contact">Contacto</a></li>
                    <li><a href="/products">Productos</a></li>
                </ul>
            </body>
            </html>
        `);
    } else if (req.url === '/about') {
        // Ruta about
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Acerca de</title>
            </head>
            <body>
                <h1>Acerca de nosotros</h1>
                <p>Somos una empresa dedicada a crear servidores web con Node.js.</p>
                <a href="/">Volver al inicio</a>
            </body>
            </html>
        `);
    } else if (req.url === '/contact') {
        // Ruta contact
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Contacto</title>
            </head>
            <body>
                <h1>Información de contacto</h1>
                <p>Puedes contactarnos en: contacto@example.com</p>
                <a href="/">Volver al inicio</a>
            </body>
            </html>
        `);
    } else if (req.url === '/products') {
        // Ruta products
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Productos</title>
            </head>
            <body>
                <h1>Nuestros Productos</h1>
                <ul>
                    <li>Producto 1</li>
                    <li>Producto 2</li>
                    <li>Producto 3</li>
                </ul>
                <a href="/">Volver al inicio</a>
            </body>
            </html>
        `);
    } else {
        // Ruta no encontrada
        res.statusCode = 404;
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Página no encontrada</title>
            </head>
            <body>
                <h1>Error 404</h1>
                <p>La página que buscas no existe.</p>
                <a href="/">Volver al inicio</a>
            </body>
            </html>
        `);
    }
});

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});