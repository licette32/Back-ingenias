// Repasamos conceptos:
// B. El objeto literal JS

// Ejemplo de un objeto literal que representa a una persona
let persona = {
    nombre: "Jennyfer",
    edad: 32,
    ciudad: "Ushuaia",
    intereses: ["escritura", "programación", "agricultura"]
};

// Accediendo a las propiedades del objeto usando la notación de punto
console.log(persona.nombre); // imprime Jennyfer
console.log(persona.edad); // imprime 32

// Tambien podemos acceder a las propiedades usando la notación de corchetes
console.log(persona["ciudad"]); // imprime Ushuaia
console.log(persona["intereses"][0]); // imprime escritura

// Puedes agregar o odificar propiedades dinámicamente
persona.profesion = "escritora";
console.log(persona); // imprime el objeto persona con la nueva propiedad

console.log(persona.profesion); // imprime escritora