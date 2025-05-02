// NULLISH COALESCING 

// O operador de coalescência nula (??) é um operador lógico que retorna o operando à esquerda se ele não for null ou undefined; 
// caso contrário, retorna o operando à direita.

let carrito;
const resultado = carrito ?? [];
console.log(resultado); //[]

// exemplo 2
let productos = null;
const resultado2 = productos ?? {error: 'Error'};
console.log(resultado2); //{error: 'Error'}


// Desestruturação de objetos
// A desestruturação de objetos é uma expressão JavaScript que extrai valores de um objeto e os atribui a variáveis distintas.
// Isso pode ser feito usando a sintaxe de colchetes ou chaves.

// exemplo 1
let producto = {id: 123, nombre: 'Mouse bluetooth', importe:1950.00, stock:45}

function mostrarProductoyPrecio({nombre, precio}) {
    console.log(nombre);
    console.log(precio);
}
// Llamar a la función con el objeto producto
mostrarProductoyPrecio(producto); // Mouse bluetooth 1950.00


//exemplo 2
let producto2 = {id: 123, nombre: 'Mouse bluetooth', importe:1950.00, stock:45}

function mostrarProductoyPrecio(prod) {
    const {nombre, importe} = prod

    console.log(nombre);
    console.log(importe);
}
// Llamar a la función con el objeto producto
mostrarProductoyPrecio(producto2); // Mouse bluetooth 1950.00


// ALIAS EN ARRAYS DE OBJETOS
const item = {
    item_id: 123,
    product_name: 'Teclado bluetooth retroiluminado',
    price_per_unit: 25600,
    active_stock: 75
}

//Desectructuramos un objeto literal y le asignamos un alias a las propiedades
const {item_id: id, product_name: nombre, price_per_unit: importe, active_stock: stock} = item



// SPREAD OPERATOR

// O operador spread (...) é usado para expandir elementos de um array ou propriedades de um objeto em outro array ou objeto.
// Isso é útil para combinar arrays, copiar objetos ou passar argumentos para funções.

// exemplo 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2]; // Combina os dois arrays
console.log(array3); // muestra [1, 2, 3, 4, 5, 6]


// Acceso condicional
// O acesso condicional (?.) é um operador que permite acessar propriedades de um objeto sem causar um erro se o objeto for null ou undefined.
// Se o objeto for null ou undefined, o resultado será undefined em vez de lançar um erro.

let producto3 = {id: 123, nombre: 'Mouse bluetooth', importe:1950.00, stock:45}
console.log(producto3?.nombre); // Mouse bluetooth
console.log(producto3?.categora); // undefined