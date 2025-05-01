// Manejo de arrays y Syntactic sugar

// Ejemplo array llamado hobbies que contiene 4 elementos
let hobbies = ['escribir', 'cocinar', 'tejer', 'diseñar'];

// acceder al segundo elemento del array
console.log(hobbies[1]); // cocinar

// Podemos modificar los elementos de array asignando un nuevo valor a su indice correspondiente
hobbies[3] = 'viajar';
console.log(hobbies);
// Salida: [ 'escribir', 'cocinar', 'tejer', 'viajar' ]


// Objeto literal JS
// ejemplo1: obbjeto es el nombre del objeto que est´´as creando, y prop1, prop2, prop3, etc-
// son propiedades del objeto que esta definido

let objeto = {
    prop1: 'valor1',
    prop2: 'valor2',
    prop3: 'valor3'
};

// ejemplo2: persona es el objeto que estamos creando, el cual posee varias propiedades:
// nombre, edad, dirección, hobbies, estudiante.

let persona = {
    nombre: 'Cristofer',
    edad: 24,
    direccion: { // objeto anidado dentro de objeto persona
        calle: 'Av. San Juan',
        ciudad: 'Brinkmann',
        pais: 'Argentina'
    },
    hobbies: ['Motos', 'correr', 'futbol'], // array de elementos
    esEstudiante: true,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
};

// Acceder a las propiedades del objeto persona
console.log(persona.nombre); // Cristofer
console.log(persona.direccion.ciudad); // Brinkmann
console.log(persona.hobbies[1]); // correr

// Array de objetos literales
// array productos informaticos que contiene 3 objetos literales
let productosInformaticos = [
    { //cada objeto tiene diferentes propiedades clave-valor
        nombre: 'Monitor Dell UltraSharp U3415W',
        precio: 799,
        resolucion: '3440 x 1440',
        tamano: '34 pulgadas',
        tipo: 'IPS',
        conectividad: 'HDMI, USB 3.0, DisplayPort'
    },
    {
        nombre: 'Portátil Lenovo ThinkPad X1 Carbon',
        precio: 1399,
        sistemaOperativo: 'Windows 10 Pro',
        pantalla: '14 pulgadas',
        procesador: 'Intel Core i7',
        memoria: '16 GB',
        almacenamiento: '512 GB SSD',
    },
    {
        nombre: 'Teclado mecánico Corsair',
        precio: 199,
        tipo: 'mecánico',
        retroIluminacion: 'RGB',
        macros: true,
        switches: 'Cherry MX Red',
    }
];

// Acceder al precio del primer producto
console.log(productosInformaticos[0].precio); // 799

// Modificar propiedades de los objetos asignando un nuevo valor a su propiedad correspondiente
productosInformaticos[1].precio = 749;
console.log(productosInformaticos[1].precio); // 749