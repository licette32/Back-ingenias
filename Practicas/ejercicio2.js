// OPERADORES

// 1. Operador ternario - evolución simple del if-else

//antes
const nombreCompleto = 'Luis Rafael';

if (nombreCompleto != '' && grupo === 'admin')
    console.log(`Bienvenido ${nombreCompleto} al sistema`);
else
    console.error('No se reconoce el usuario o el usuario está vacio.');

// Operador ternario
const combreCompleto2 = 'Luis Rafael';

nombreCompleto !== '' ? console.log(`Bienvenido ${nombreCompleto}`) 
: console.error('No se reconoce el usuario o el usuario está vacio.');

// reemplazo ? = if, : = else

// Tambien funciona como retorno implicito
const nombreCompleto3 = 'Luis Rafael';
const resultado = nombreCompleto3 !== '' ? true : false;
console.log(resultado);

// 2. Operadores Lógicos AND (&&) y OR (||)

// AND(&&) se utiliza en ocaciones en los que se quiere simplificar una estructura
// de control de tipo if simple.
let color = 'Violeta';
if (color === 'Violeta') {
    console.log('El color elegido es el correcto');
}

// con el operador logico AND
(color === 'Violeta') && console.log('El color elegido es el correcto');
// el operador && solo ejecuta la segunda parte si la primera es verdadera


// OR (||) funciona para detectar un posible error ante un valor inesperado en el codigo
obtenerCarritoConProductos(); // devuelve null
const carrito  = obtenerCarritoConProductos() || []; // devuelve un array vacio
// el operador || devuelve el primer valor verdadero que encuentra, o el último si no hay ninguno
// para valores de tipo falsy (null, undefined, 0, NaN, '', false)
// el operador || devuelve el primer valor verdadero que encuentra, o el último si no hay ninguno


