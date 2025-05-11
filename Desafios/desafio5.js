// Importación de Express (previa instalación con: npm install express)
const express = require('express');

// Inicialización de la aplicación Express
const app = express();

// Configuración del puerto (mantenemos el 3008 como en la versión original)
const PORT = 3008;

// Middleware para manejar datos de formularios (extendemos las capacidades del servidor)
app.use(express.urlencoded({ extended: true }));

/**
 * RUTAS DEL SERVIDOR (equivalentes a las originales pero con sintaxis Express)
 */

// 1. Ruta principal '/' - GET
app.get('/', (req, res) => {
    res.status(200).send('<h1>Bienvenidas a nuestra web</h1>');
});

// 2. Ruta '/Cursos' - GET (mantenemos exactamente la misma ruta)
app.get('/Cursos', (req, res) => {
    res.status(200).send('<h1>Bienvenidas a nuestra sección cursos</h1>');
});

// 3. Ruta '/Contacto' - GET (conservamos la capitalización original)
app.get('/Contacto', (req, res) => {
    res.status(200).send('<h1>Contactanos en instagram</h1>');
});

/**
 * CONTROL DE ERRORES PARA RUTAS INEXISTENTES
 * (Equivalente al else final del código original pero mejorado)
 */
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// Iniciar el servidor (mismo puerto que la versión HTTP)
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
    console.log(`Rutas disponibles:
    - http://localhost:${PORT}/
    - http://localhost:${PORT}/Cursos
    - http://localhost:${PORT}/Contacto`);
});