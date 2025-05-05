/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

/*
class producto (){
costructor(){
nombre 
codigo 
precio
}

mostrarValores funtion (nombre, codigo, precio){
documentwritline("el precio es this.precio")
documentwritline("el precio es this.precio")
documentwritline("el precio es this.precio")
}

}

const carro = new producto (cochecisot, 36428374623, $5000)
carro.mostrarvalores() 

const carro = new producto (cochecisot, 36428374623, $5000)
carro.mostrarvalores()

const carro = new producto (cochecisot, 36428374623, $5000)
carro.mostrarvalores() 

const elementos []

*/

class Producto {
    constructor(nombre, codigo, precio) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }

    imprimeDatos() {
        document.writeln(`Nombre: ${this.nombre}<br>`);
        document.writeln(`Código: ${this.codigo}<br>`);
        document.writeln(`Precio: $${this.precio}<br><br>`);
    }
}

const producto1 = new Producto("Cochecito", 36428374623, 5000);
const producto2 = new Producto("Triciclo", 111222333, 7500);
const producto3 = new Producto("Patín", 444555666, 4200);

const productos = [producto1, producto2, producto3];

for (let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
}
