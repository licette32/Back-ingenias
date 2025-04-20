// El objeto console nos permite interactuar con la consola del navegador o del servidor (Node.js)
// Sus métodos principales para mostrar mensajes son .log(), .warn() y .error()

// 1. console.log() - Para mensajes informativos generales
console.log('Este es un mensaje de registro estándar');
console.log('Puedes mostrar variables:', {nombre: 'Licette', edad: 35});

// 2. console.warn() - Para advertencias 
console.warn('¡Atención! Esto es una advertencia');
console.warn('Advertencia: La función X será deprecada en la próxima versión');

// 3. console.error() - Para mensajes de error (rojo)
console.error('¡Algo salió mal!');
console.error('Error: No se pudo conectar a la base de datos', new Error('Connection failed'));

// 4. console.table() - Para estructurar la info de array y objetos.
console.table([{nombre: 'Licette', edad: 35}, {nombre: 'Juan', edad: 28}]);
console.table({nombre: 'Licette', edad: 35, ciudad: 'Madrid'});
console.table([1, 2, 3, 4, 5]); // Muestra un array como tabla
console.table(['Rojo', 'Verde', 'Azul']); // Muestra un array de strings como tabla

// Variables
let nombreCompleto = 'Licette';
let ocupacion = 'Desarrolladora web';
let empresa = 'Technology Solutions';

// Constantes
const empresaTech = 'Technology Solutions';
console.log(empresaTech); // Muestra el valor de la constante empresaTech

// Funciones
// 1. Definición de una función simple
let nameComplet = 'Licette Gonzalez';
function mostrarMiName(){
    console.log("2- My name:" + nameComplet);
}
mostrarMiName();

// 2. Definición de una función con parámetros
let nameCompleto = "Shara Lesson";
function mostrarnNameCompleto(nameCompleto){
    console.log("3- My name is:" + nameCompleto);
}
mostrarnNameCompleto(nameCompleto);

// 3. funcion con retorno
function obtenerMaximo(num1, num2, num3){
    return Math.max(1, 3, 14);
}
obtenerMaximo(2, 4, 15); // Muestra el valor máximo entre los tres números


// 1. Condicionales
const miNombreCompleto = "Jennyfer Muller";

if (miNombreCompleto !== '') {
    console.log('Bienvenida '`${miNombreCompleto}`);
} else {
    console.error('No se reconoce el usuario, o el usuaio está vacio');
}

// 2. condicionales operadores lógicos
const esNombreC = 'Juana Aldao';
const login = false;

if (esNombreC !== '' && login === false) {
    console.log('Bienvenida '`${esNombreC}`);
    login = true;
} else {
    console.error('No se reconoce el usuario, o el usuaio está vacio');
}

// Ciclos de iteración
const paisesLatinos = ['Argentina', 'Colombia', 'Chile', 'Perú', 'Uruguay'];

for (let i = 0; i < paisesLatinos.length; i++) {
    console.log(paisesLatinos[i]);
} // Muestra todos los países de la lista

