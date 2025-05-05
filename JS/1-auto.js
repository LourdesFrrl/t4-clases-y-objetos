const auto = {
    color: "Rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
       alert("Auto encendido");
      } else {
       alert("El auto ya está encendido");
      }
    },
  
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
       alert("El auto se apagó");
      } else {
       alert("El auto ya está apagado");
      }
    }
  };
  

  auto.encender();
  auto.apagar();  
  