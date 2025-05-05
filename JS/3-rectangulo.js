/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

*/

class Rectangulo {
    constructor(base, altura){
        this.base= base
        this.altura= altura
    }

    perimetro(){
        document.writeln (`el perimetro es `, 2*(this.base+this.altura))
    }
    area(){
        document.writeln("<br>el area es ", this.base*this.altura)
    }
}

const base = Number(prompt("ingrese la base del rectangulo"))
const altura = Number(prompt("ingrese la altura del rectangulo"))
const rectangulo1 = new Rectangulo (base, altura)
rectangulo1.perimetro()
rectangulo1.area()