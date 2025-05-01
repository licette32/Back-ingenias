// Repasamos conceptos:
// A. Concepto de un Array: Array de elementos


// Ejemplo d eun array de numeros
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Ejemplo de un array de strings
let colores = ["verde", "naranjo", "violeta", "amarillo"];

// Ejemplo de un array con diferentes tiposs de datos
let mixto = [10, "hola", true, null, [6,8]];


// Accediendo a elementos del array usando su índice
console.log(numeros[0]); //Imprime 1 (el primer elemento)
console.log(colores[2]); //Imprime violeta (el tercer elemento)
console.log(mixto[4][1]); //Imprime 8 (el segundo elemento del array dentro del array)

//La propiedad length te dice cuantos elementos hay en un array
console.log(numeros.length); //Imprime 8 (hay 8 elementos en el array numeros)