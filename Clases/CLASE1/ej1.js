// Supongamos que tenemos un array de productos con nombre y precio
// 1. Crear una función que calcule el precio total.
// 2. Imprimir la tabla de productos co console.table().
// 3. Usar try, catch, finally para manejar errores si el array esta vacio o su valor es incorrecto.

// Array de productos
const productos = [
    {nombre: "Notebook", precio: 1000},
    {nombre: "Teclado", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Monitor", precio: 700},
];

// Función para calcular el precio total
function calcularPrecioTotal(lista) {
    try {
        if (!Array.isArray(lista) || lista.length === 0) {
            throw new Error("El array de productos está vacío o no es un array válido.");
        }

        console.log("La lista de productos está vacía o no es un array válido.");
        console.table(lista);

        const total = lista.reduce((acc, producto) => {
            if (typeof producto.precio !== "number") {
                throw new Error(`El precio de ${producto.nombre} no es un número válido.`);
            }
            return acc + producto.precio;
        }, 0);

        console.log(`El precio total de los productos es: $${total}`);
     } catch (error) {
        console.error("Error:", error.message);
     } finally {
        console.log("Proceso finalizado.");
     }
}

// Ejecutar función
calcularPrecioTotal(productos); // Muestra la tabla de productos y el precio total