class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      document.writeln(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.<br>`);
    }
  
    despedirse() {
      document.writeln("Adiós.<br>");
    }
  }
  
  const persona1 = new Persona("Lucía", 30, "Ingeniera");
  const persona2 = new Persona("Carlos", 45, "Médico");
  
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();
  