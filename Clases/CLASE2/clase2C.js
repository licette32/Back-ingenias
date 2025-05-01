// EcmaScript 6 y superior
// Comceepto de retorno implícito (retorno automático)

// Ej: la función suma no utiliza palabra clave return, por lo que su valor de retornp sserá UNDEFINED
function suma(x, y) {
    x + y; // Esta expresión se evalúa, pero no se devuelve
}
suma(4, 9); //undefined


// ej: función suma si utiliza la palabra clave return devolviendo el resultado de la suma
function suma(x, y) {
    return x + y; // Esta expresión se evalúa y se devuelve
}
suma(4, 9); //13


// Funciones anonimas
function saludar(nombre) { // tipo de dato stripg
    console.log("Hola " + nombre + ", bienvenido a la clase de JavaScript");
}
saludar("Juan"); // Hola Juan, bienvenido a la clase de JavaScript
saludar("Pedro"); // Hola Pedro, bienvenido a la clase de JavaScript