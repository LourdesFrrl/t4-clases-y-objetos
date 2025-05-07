class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.pasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.pasajeros.length < this.capacidad) {
        this.pasajeros.push(pasajero);
        document.writeln(`${pasajero} abordó el avión ${this.nombre}.<br>`);
      } else {
        document.writeln(`El avión ${this.nombre} está lleno.<br>`);
      }
    }
  }
  
  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      const avion = this.listaAviones.find(function(a) {
        return a.nombre === nombreAvion;
      });
  
      if (avion) {
        document.writeln(`Avión encontrado: ${avion.nombre}, destino: ${avion.destino}, capacidad: ${avion.capacidad}<br>`);
        return avion;
      } else {
        document.writeln("Avión no encontrado.<br>");
        return null;
      }
    }
  }
  
  const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Avión Norte", 2, "Canadá");
  const avion2 = new Avion("Avión Sur", 3, "Argentina");
  const avion3 = new Avion("Avión Este", 1, "Japón");
  
  aeropuerto.agregarAvion(avion1);
  aeropuerto.agregarAvion(avion2);
  aeropuerto.agregarAvion(avion3);
  
  const avionEncontrado = aeropuerto.buscarAvion("Avión Sur");
  
  if (avionEncontrado) {
    avionEncontrado.abordar("Martina");
    avionEncontrado.abordar("Luis");
    avionEncontrado.abordar("Pepe");
  }
  