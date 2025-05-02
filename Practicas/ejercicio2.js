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


