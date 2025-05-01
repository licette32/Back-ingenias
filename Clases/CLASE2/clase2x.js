// FUNCIONES ANÓNIMAS, FLECHAS

// Estructura similar a la declaración de una variable o constante

const obtenerMaximo = function () {
    console.log(Math.max(2, 5, 11));
}
obtenerMaximo(); // 11

// Integrar uno o mas parametros a la función
const obtenerMaximo2 = function (num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
}
obtenerMaximo2(2, 5, 11); // 11


// Funciones flechas o Arrow functions
// Sintaxis simplificada de las funciones anónimas
const obtenerMaximo3 = (num1, num2, num3) => {
    console.log(Math.max(num1, num2, num3));
}
obtenerMaximo3(2, 5, 11); // 11

// arrow function con un solo parámetro
const arrayNumeros = [1, 2, 3, 14, 75, 9, 78];

const obtenerMaximo4 = array => {
    console.log(Math.max(...array));
}
obtenerMaximo4(arrayNumeros);

// Tambien soportan retornos de resultados

