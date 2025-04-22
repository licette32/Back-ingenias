// Repasamos conceptos:
// D. JavaScript JSON, y sus métodos

// Ejemplo de un objeto JS
let myObject = {nombre: "Axel", edad: 37, ciudad: "El Bolsón"};

// Convertimos el objeto a JSON
let jsonString = JSON.stringify(myObject);
console.log(jsonString); // {"nombre":"Axel","edad":37,"ciudad":"El Bolsón"}

// Convertimos el JSON a objeto JS
let objectFromJson = JSON.parse(jsonString);
console.log(objectFromJson); // {nombre: "Axel", edad: 37, ciudad: "El Bolsón"}

// Ejemplo con un array
let myArray = [3, "cuatro", true];
let jsonArrayString = JSON.stringify(myArray);
console.log(jsonArrayString); // [3,"cuatro",true]

let arrayFromJson = JSON.parse(jsonArrayString);
console.log(arrayFromJson); // [3, "cuatro", true]