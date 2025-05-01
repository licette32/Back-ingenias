// Objeto JSON

let objeto = {
    nombre: 'Cristofer',
    edad: 24,
    ciudad: 'Rio Cuarto'
};

let json = JSON.stringify(objeto); // Convertir objeto a JSON
console.log(json); // {"nombre":"Cristofer","edad":24,"ciudad":"Rio Cuarto"}



let jsonString = '{"nombre":"Cristofer","edad":24,"ciudad":"Rio Cuarto"}'; // Cadena JSON
let objeto2 = JSON.parse(jsonString); // Convertir JSON a objeto
console.log(objeto2); // { nombre: 'Cristofer', edad: 24, ciudad: 'Rio Cuarto' }

