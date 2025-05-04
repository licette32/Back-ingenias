// Resultado de una promesa JS
// Buscamos obtener un número aleatorio y solo se resolverá la promesa si
// el número es mayor que 0.5

const promesa = new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random();

    if (numeroAleatorio < 0.5) {
        resolve(numeroAleatorio); // se resuelve con éxito
    } else {
        reject(new Error('El número random es mayor o igual a 0.5'));
        // se rechaza la promesa
    }
})
promesa
    .then(resultado => console.log('La promesa se resolvió con éxito:', resultado))
    .catch(error => console.error('La promesa se rechazó debido a un error:', error));

//promesa
//    .then(resultado => console.log('La promesa se resolvió con éxito:', resultado))
//    .catch(err => console.error('La promesa se rechazó debido a un error:', err));
//    .finally(() => console.warn('Mensaje alernativo que se muestra siempre'));


// funcion fetch()
fetch('https://miservidorremoto.com/api/clientes')
    .then(response => response.json())
    .then(json => cargarTablaClientes(json))
    .catch(err => console.error("Se ha producido un error.", err))
    .finally(clientes => console.log("Finalizó la petición"))


// ASINCRONISMO
//Utilizamos funciones asincronicas y callbacks
// exemplo
function tareaAsincrona(callback) {
    setTimeout(function() {
        callback("resultado de la tarea asincrona");
    }, 1000);
}
console.log("Inicio");

tareaAsincrona(function(resultado) {
    console.log(resultado);
});
console.log("Fin");
//la funcion recie n argumento callback, que es una funcion q se ejecuta una vez
//que se ha completado la tarea asíncrona.


// ASYNC -AWAIT
// Se utiliza para trabajar con promesas de una manera más sencilla y legible

//async --> declarar una f asincrona --> devuelve una promesa
async function tareaAsincrona() {
    // funcion JS convertida en asincrónica
    //podemos esperar procesos que tienen un tiempo
    //indefinido en terminar
}

//await -->utilizado dentro de una f asincrona --> espera a que una promesa se resuelva o se rechace
async function tareaAsincrona() {
    const resultado = await obteniendoDatos();
        console.table(JSON.parse(resultado));
}

//try/catch --> para manejar errores en funciones asincrónicas
async function tareaAsincrona() {
    try {
        const resultado = await obteniendoDatos();
        console.table(JSON.parse(resultado));
    } catch (error) {
        console.error("Se ha producido un error", error);
    }
}

//desarrollo de app para servidores
//uso de fetch() para obtener datos de un servidor remoto
async function obtenerDatos() {
    try {
        const resultado = await fetch(URL);
        const data = await resultado.json();
        console.table(data);
    } catch(error) {
        console.error("Se ha producido un error", error);
    }
}


//TEMPORIZADORES
//setTimeout() --> ejecuta una función después de un tiempo determinado
setTimeout(funcion, tiempo);

//exemplo
setTimeout(function() {
    console.log("Hola, soy un temporizador");
}, 2000); // 2 segundos

//exemplo
const timeout = setTimeout(() => {
    console.log('han pasado 2 segundos');
}, 2000); // 2 segundos
//clearTimeout(timeout); // cancela el temporizador

//setInterval() --> ejecuta una función de forma repetida en un intervalo de tiempo determinado
setInterval(function() {
    console.log('Este mensaje se mostrar+a cada 2 segundos');
}, 2000); // 2 segundos

// exemplo
const cancelInterval = setInterval(function() {
    console.log('Este mensaje se mostrará cada 2 segundos');
    }, 2000);

clearInterval(cancelInterval); // cancela el intervalo