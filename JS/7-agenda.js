/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
/*

const agenda {
tamaño
const contactos = [] esto seria un array

ahora van los metodos:

switch{
aniadirContacto(Contacto){
contactos.push
}
existeContacto(Contacto){
if (el contacto que ongresa ya existe){
documente= ya existe} else{ no exite}
}
listarContactos{
buscar algun metodo de array que liste todos los contactos
}
buscarContacto{
metodo find de array para enconrtrar los contactos
}
eliminarContacto(Contacto c){
el metodo split de array 
}
agendaLlena{
if(agenda.tamaño=10 o numero que ingresa la persona){
documet(agenda llena)}else{document(agenda no llena)}
}
huecosLibres{
while(tamaño.agenda<=10 o tamaño elegido){
let huecos ocupados= 0
huecos ocupados ++
}
break
huecosLibres=10-huevos ocupados
}

prompt pidiendo el tamaño de la agenda
un bucle for para ir agregando contactos
switch{
aca en el switch ponemos todas las opciones y llamamos a la funcion para que se ejecuten
1aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
2existeContacto(Contacto): indica si el contacto pasado existe o no.
3listarContactos(): Lista toda la agenda
4buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
5eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
6agendaLlena(): indica si la agenda está llena.
7huecosLibres(): indica cuántos contactos más podemos ingresar.
default
}confirm(prompt(desea realizar otra operacion))

*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.tamano = tamano;
        this.contactos = [];
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            alert("La agenda está llena. No se puede agregar más contactos.");
        } else if (this.existeContacto(contacto.nombre)) {
            alert("El contacto ya existe.");
        } else {
            this.contactos.push(contacto);
            alert("Contacto añadido.");
        }
    }

    existeContacto(nombre) {
        return this.contactos.some(c => c.nombre.toLowerCase() === nombre.toLowerCase());
    }

    agendaLlena() {
        return this.contactos.length >= this.tamano;
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            alert("La agenda está vacía.");
        } else {
            this.contactos.forEach(c => {
                console.log(`${c.nombre}: ${c.telefono}`);
            });
        }
    }

    buscarContacto(nombre) {
        const contacto = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (contacto) {
            alert(`Teléfono de ${nombre}: ${contacto.telefono}`);
        } else {
            alert("Contacto no encontrado.");
        }
    }

    eliminarContacto(nombre) {
        const index = this.contactos.findIndex(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (index !== -1) {
            this.contactos.splice(index, 1);
            alert("Contacto eliminado.");
        } else {
            alert("Contacto no encontrado.");
        }
    }

    huecosLibres() {
        return this.tamano - this.contactos.length;
    }
}

let tam = prompt("¿Cuál es el tamaño máximo de la agenda?");
const miAgenda = new Agenda(Number(tam) || 10);

let opcion;
do {
    opcion = prompt(
        "1. Añadir contacto\n2. Ver si existe un contacto\n3. Listar todos los contactos\n4. Buscar contacto por nombre\n5. Eliminar contacto\n6. ¿Agenda llena?\n7. Ver huecos libres\n8. Salir"
    );

    switch (opcion) {
        case "1":
            const nombre = prompt("Ingrese nombre:");
            const telefono = prompt("Ingrese teléfono:");
            miAgenda.aniadirContacto(new Contacto(nombre, telefono));
            break;

        case "2":
            const nombre2 = prompt("Ingrese el nombre a buscar:");
            alert(miAgenda.existeContacto(nombre2) ? "Existe" : "No existe");
            break;

        case "3":
            miAgenda.listarContactos();
            break;

        case "4":
            const nombre3 = prompt("Ingrese nombre del contacto:");
            miAgenda.buscarContacto(nombre3);
            break;

        case "5":
            const nombre4 = prompt("Nombre del contacto a eliminar:");
            miAgenda.eliminarContacto(nombre4);
            break;

        case "6":
            alert(miAgenda.agendaLlena() ? "La agenda está llena." : "Todavía hay lugar.");
            break;

        case "7":
            alert(`Huecos libres: ${miAgenda.huecosLibres()}`);
            break;

        case "8":
            alert("¡Hasta luego!");
            break;

        default:
            alert("Opción no válida.");
            break;
    }
} while (opcion !== "8");
