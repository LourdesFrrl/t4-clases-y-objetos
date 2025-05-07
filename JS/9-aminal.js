class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      document.writeln(`${this.nombre} hace un sonido.<br>`);
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      document.writeln(`${this.nombre} dice: ¡Guau!<br>`);
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      document.writeln(`${this.nombre} dice: ¡Miau!<br>`);
    }
  }
  
  const perro1 = new Perro("Luis", 5);
  const gato1 = new Gato("Lucas", 3);
  
  perro1.emitirSonido();
  gato1.emitirSonido();
  