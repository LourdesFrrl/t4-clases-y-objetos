/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        document.writeln(`Se ingresaron $${cantidad}.`);
      } else {
        document.writeln("La cantidad a ingresar debe ser mayor que cero.");
      }
    },
  
    extraer: function(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        document.writeln(`Se extrajeron $${cantidad}.`);
      } else if (cantidad > this.saldo) {
        document.writeln("Fondos insuficientes.");
      } else {
        document.writeln("La cantidad a extraer debe ser mayor que cero.");
      }
    },
  
    informar: function() {
      return `Titular: ${this.titular}, Saldo: $${this.saldo}`;
    }
  };
  
  
  document.writeln(cuenta.informar() + "<br>");

  const montoIngresar = parseFloat(prompt("¿Cuánto dinero desea ingresar?"));
  cuenta.ingresar(montoIngresar);

  const montoExtraer = parseFloat(prompt("¿Cuánto dinero desea extraer?"));
  cuenta.extraer(montoExtraer);

  document.writeln(cuenta.informar() + "<br>");
