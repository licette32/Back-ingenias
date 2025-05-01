// Repasamos conceptos:
// E. EcmaScript 6 (y superior)

// Ejemplo de let y const
let edad = 45;
edad = 46; //Válido

const nombre = "Erastóstenes"
// nombre = "Arquímedes"; //No válido, no se puede cambiar el valor de una constante

// Arrow function
const saludar = (nombre) => `Hola, ${nombre}!`;
console.log(saludar("Marcelina"));

// Template literal
const ciudad = "Trevelin";
const mensaje = `${ciudad}.`;
console.log(mensaje);

// Destructuring de un array
const colores = ["Negro", "Gris", "Marrón"];
const [primero, segundo] = colores;
console.log(primero, segundo); // Imprime "Negro Gris"

// Destructuring de un objeto
const usuario = { nombre: "Juliana", edad: 17 };
const { nombre: nombreUsuario, edad: edadUsuario } = usuario;
console.log(nombreUsuario, edadUsuario); // Imprime "Juliana 17"

// Spread operator con arrays
const numeros1 = [1.2, 2.3, 3.4];
const numeros2 = [...numeros1, 4.5, 5.6];
console.log(numeros2); // Imprime

// Spread operator con objetos
const detalles = { profesion: "Veterinaria" };
const usuarioCompleto = { ...usuario, ...detalles };
console.log(usuarioCompleto); // Imprime { nombre: 'Juliana', edad: 17, profesion: 'Veterinaria' }

// Métodos de array (ejemplo con map)
const dobles = numeros1.map(numero => numero * 2);
console.log(dobles); // Imprime [ 2, 4, 6 ]