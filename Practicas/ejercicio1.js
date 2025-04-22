// Array de países
let paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay", "Bolivia", "Venezuela"];

// Constante con nombre
const nombre = "Donna Clark";

// Función para listar países
function listarPaises(Array) {
    console.log("Listado de países contenidos en el array:");
    console.table(Array);
}

// Función para intentar cambiar una constante
function cambiarNombre() {
    const tuNombre = "Tu Nombre"; // Reemplazá por tu nombre real, por ejemplo: "Laura"

    try {
        tuNombre = nombre; // Esto genera un error porque no se puede reasignar una constante
    } catch (err) {
        console.error("Se ha producido un error al intentar cambiar el valor de una constante:", err);
    } finally {
        console.log("El nombre de la constante tuNombre, es:", tuNombre);
    }
}

// Llamadas de prueba
listarPaises(paises);
cambiarNombre();
