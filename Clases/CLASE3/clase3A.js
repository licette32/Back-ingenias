// FUNCIONES CONSTRUCTORAS

// Uma función constructora se utiliza para crear objetos con las mismas propiedades y métodoos

// exemplo 1: funcion constructora para objeto "Productos"
function Producto(nombre, importe) {
    this.id = crearID() // this se refiere al objeto que se está creando
    this.nombre = nombre
    this.importe = importe

    this.importeConIVA = function() {
        const IVA = 1.21
        return this.importe * IVA
    }
}

// Creamos un objeto Producto usando la función constructura
const producto1 = new Producto("Teclado Bluetooth", 25600)
const producto2 = new Producto("Mouse Inalambrico", 15000)
const producto3 = new Producto("Monitor 4K", 80000)

// Lamamos al metodo calcularIVA de cada objeto creado
console.log(producto1.calcularIVA()); // Salida 30976
console.log(producto2.calcularIVA()); // Salida 18150
console.log(producto3.calcularIVA()); // Salida 96800


// CLASES JS
// Su estructura se asemeja a una clase de java o c#
class Producto {
    constructor(nombre, importe) {
        this.id = crearID()
        this.nombre = nombre
        this.importe = importe
    }

    importeConIVA() {
        const IVA = 0.21
        return this.importe * IVA
    }
}

const productoA = new Producto("Macbook Air 13", 779500)
const productoB = new Producto("Lenovo House 14", 1200000)
const productoC = new Producto("Asus ROG 15", 1500000)


// exemplo
class Producto {
    static acercaDe() {
        console.log("Copyright 2023 - Todos los derechos reservados")
    }
    constructor(nombre, importe) {
        this.id = crearID()
        this.nombre = nombre
        this.importe = importe
    }

    importeConIVA() {
        const IVA = 0.21
        return this.importe * IVA
    }
}

const prod = new Producto("Macbook Air 13", 779500) 
// Una vez instanciada la clase, el objeto en cuestión no hereda los miembros
// esta´ticos definidos en la clase

// getters y setters
class Producto {
    constructor(nombre, importe) {
        this.id = crearID()
        this.nombre = nombre
        this.importe = importe
    }

    get getNombre() {
        return this.nombre.toUpperCase() || ""
    }

    get getImporte() {
        return this.importe || 0.00
    }

    setNombre(nombreProducto) {
        if (!nombreProducto) {
            console.log("El nombre un nombre válido")
        } else {
            this.nombre = nombreProducto.toUpperCase()
        }
    }
}



// PROMESAS JS
objeto.onComplete = () => {
    console.log("Tarea que se ejecuta al ocurrir el evento Complete");
}

objeto.onError = (err) => {
    console.log("Si ocurre un error, se ejecuta este otro", err);
}

// Ejemplo básico del uso de promesas a partir de la clase Promise
//return new Promise((resolve, reject) => {
    // controlar estados de la promesa y, resolverla o rechazarla
//})

// Pending: La promesa se está ejecutando
const promesa = new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random();
}) // Si ejecutamos el objeto en la cobsola JS, nos devuelve su estado
promesa
Promise{<pending>}
