// Repasamos conceptos:
// C. Array de objetos literales

let usuarios = [
    {nombre: "Silvia", email: "silvia@hotmail.com", edad:56},
    {nombre: "Norma", email: "norma_9@gmail.com", edad: 59},
    {nombre: "Esteban", email: "esteban_quito@yahoo.com", edad: 38}
];

// Accediendo a los objetoss dentro del array
console.log(usuarios[0]); // imprime el primer objeto Silvia
console.log(usuarios[1].nombre); // imprime Norma
console.log(usuarios[2]["email"]);

// Podemos iterar sobre el array de objetos
usuarios.forEach(usuario => {
    console.log(`${usuario.nombre} tiene ${usuario.edad} años.`);
});