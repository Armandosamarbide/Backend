class Proyecto {
  constructor(nombre, precio, categoria, duracionEstimada) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.duracionEstimada = duracionEstimada;
    this.participantes = [];
  }

  /* Agregar un participante. */

  agregarParticipante(participante) {
    this.participantes.push(participante);
  }

  /* Eliminar un participante buscando su nombre */

  EliminarParticipante(nombre) {
    this.participantes = this.participantes.filter(
      (participante) => participante.nombre !== nombre
    );
  }

  /* Cambiar la estimación del proyecto */

  reestimarElProyecto(nuevaEstimacion) {
    this.duracionEstimada = nuevaEstimacion;
  }

  nombrarParticipantes() {
    this.participantes.forEach((participante) => {
      console.log(participante.nombre, participante.apellido);
    });
  }

  Pagar() {
    this.participantes.forEach((participante) => {
      participante.pagarSueldo();
    });
  }
}

class Participante {
  constructor(nombre, apellido, remuneracion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dinero = 0;
    this.amigos = [];
    this.remuneracion = remuneracion;
  }

  pagarSueldo() {
    this.dinero += this.remuneracion;
  }
}

class Participante {
  constructor(nombre, apellido, remuneracion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dinero = 0;
    this.amigos = [];
    this.remuneracion = remuneracion;
  }

  pagarSueldo() {
    this.dinero += this.remuneracion;
  }
}
