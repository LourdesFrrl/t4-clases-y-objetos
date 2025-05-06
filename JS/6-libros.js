/*
Libros - Dificultad:  🟢🟡🔴
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

/*



/*
class libro{
constructor(ISBN
Título
Autor
Número de páginas){
this.ISBN = ....
this.Título = ....
this.Autor = ....
this.Número de páginas = ....
}

mostrarInformacion function{
documentewriteline("el libre this.libro con ibsn this.sbn ......")
}

}

const libro1= new libro (-........propiedades)
mostrarinformacion.libro1

const libro2= new libro (-........propiedades)
mostrarinformacion.libro2

if(paginas.libro1>paginas.libr){
documentwriteln("el libro  tiene mas pagina")
}else{
 document.writeln("el libro  tiene mas paginas")}

*/

class Libro {
    #isbn;
    #titulo;
    #autor;
    #paginas;

    constructor(isbn, titulo, autor, paginas) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#paginas = paginas;
    }

    // Getters
    get isbn() {
        return this.#isbn;
    }

    get titulo() {
        return this.#titulo;
    }

    get autor() {
        return this.#autor;
    }

    get paginas() {
        return this.#paginas;
    }

    // Setters
    set isbn(valor) {
        this.#isbn = valor;
    }

    set titulo(valor) {
        this.#titulo = valor;
    }

    set autor(valor) {
        this.#autor = valor;
    }

    set paginas(valor) {
        this.#paginas = valor;
    }

    mostrarLibro() {
        document.writeln(
            `El libro "${this.#titulo}" con ISBN ${this.#isbn}, creado por el autor ${this.#autor}, tiene ${this.#paginas} páginas.<br><br>`
        );
    }
}

const libro1 = new Libro("96376734434", "El Principito", "Antoine de Saint-Exupéry", 96);
const libro2 = new Libro("96376733434", "Cien años de soledad", "Gabriel García Márquez", 417);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.paginas > libro2.paginas) {
    document.writeln(`"${libro1.titulo}" tiene más páginas.<br>`);
} else if (libro2.paginas > libro1.paginas) {
    document.writeln(`"${libro2.titulo}" tiene más páginas.<br>`);
} else {
    document.writeln("Ambos libros tienen la misma cantidad de páginas.<br>");
}

