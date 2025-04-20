// FUNCIONES
// Sistema de estudiantes
// Array de estudiantes
const estudiantes = ["Ana", "Enzo", "Bruno", "Sandra", "Carolina", "Maria"];

// 1. función sin parametros, simple mostrará de estudiantes.
function mostrarEstudiantes() {
    console.log("Lista de estudiantes:");
    console.table(estudiantes);
}

// 2. Funcion con parámetros. Agregar un estudiante sin modificar el array original.
function agregarEstudiante(nuevoNombre) {
    const nuevaLista = [...estudiantes, nuevoNombre];
    console.log("Estudiante `${nuevoNombre}` agregado.");
    console.table(nuevaLista);
}

// Ejecutar funciones
mostrarEstudiantes();
agregarEstudiante("Silvia");