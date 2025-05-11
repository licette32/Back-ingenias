// Descripción: Versión mejorada del servidor HTTP usando Express.js
// Express ofrece un manejo más sencillo de rutas, middlewares y características adicionales

// 1. Importar Express (primero debes instalarlo con: npm install express)
const express = require('express');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto (mantenemos el mismo 3008 para consistencia)
const PORT = 3008;

// Middleware para parsear URLs (útil para recibir datos de formularios)
app.use(express.urlencoded({ extended: true }));

// 4. Definir las rutas (más limpio y organizado que con HTTP nativo)

// Ruta principal ('/')
app.get('/', (req, res) => {
    // Express simplifica el envío de respuestas HTML
    res.send('<h1>Bienvenidas a nuestra web</h1>');
});

// Ruta '/Cursos' (ahora case-insensitive con regex)
app.get(/\/cursos/i, (req, res) => {
    res.send('<h1>Bienvenidas a nuestra sección cursos</h1>');
});

// Ruta '/Contacto'
app.get('/Contacto', (req, res) => {
    res.send('<h1>Contactanos en instagram</h1>');
});

// 5. Manejo de rutas no encontradas (404)
// Express tiene un manejo más elegante para esto
app.use((req, res) => {
    // Corrección: ahora sí usa text/html consistentemente
    res.status(404).send('<h1>404 Not Found</h1>');
});

// 6. Iniciar el servidor (similar al HTTP nativo pero con más opciones)
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});

// Ventajas de esta versión con Express:
// 1. Manejo de rutas más intuitivo y flexible
// 2. Soporte para middlewares (como el urlencoded que añadimos)
// 3. Sistema de routing más organizado
// 4. Más fácil de escalar para añadir nuevas funcionalidades
// 5. Mejor manejo de errores