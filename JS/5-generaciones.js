/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


*/

/*
class persona {
constructur (nombre edad, dni, sexo){
this.nombre= nombre
this.nombre= jdjdjd
this.nombre= kkk

mostrarGeneracion(){
if(thisedad<=55){
documentawriteline mostrando la generacion }if else{
}if else

}
}
mayorDeEdad(){
if(this.edad>m16){
docuemnte.write("e mayor de edad")}
}else{
documente("es mayor de edad")}

mostrardatos(){
usar un return
}

generadDNI(){
for(let i=0; i<=8, i++){
math.randon.mathfloor (o algo asi)
}
}

}
*/

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        let generacion = "";
        let rasgo = "";

        if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
            generacion = "Generación Z";
            rasgo = "Irreverencia";
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
            generacion = "Generación Y (Millennials)";
            rasgo = "Frustración";
        } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsesión por el éxito";
        } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición";
        } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
            generacion = "Silent Generation";
            rasgo = "Austeridad";
        } else {
            generacion = "Generación desconocida";
            rasgo = "No identificado";
        }

        document.writeln(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es: ${rasgo}.<br>`);
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.writeln(`${this.nombre} es mayor de edad.<br>`);
        } else {
            document.writeln(`${this.nombre} es menor de edad.<br>`);
        }
    }

    mostrarDatos() {
        document.writeln(
            `Nombre: ${this.nombre}<br>
            Edad: ${this.edad}<br>
            DNI: ${this.dni}<br>
            Sexo: ${this.sexo}<br>
            Peso: ${this.peso} kg<br>
            Altura: ${this.altura} m<br>
            Año de nacimiento: ${this.añoNacimiento}<br><br>`
        );
    }

    generaDNI() {
        this.dni = Math.floor(10000000 + Math.random() * 90000000);
        document.writeln(`DNI generado: ${this.dni}<br>`);
    }
}

const persona1 = new Persona("Lourdes", 27, null, "F", 60, 1.55, 1998);
persona1.generaDNI();        
persona1.mostrarDatos();     
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();    
