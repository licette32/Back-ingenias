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

    