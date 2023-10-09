class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.trabajos = [];
    this.edad = edad;
  }
  agregarTrabajo(trabajo) {
    this.trabajos.push(trabajo);
  }
}

class Trabajo {
  constructor(nombre, tiempoEstimado, remuneracion) {
    this.nombre = nombre;
    this.tiempoEstimado = tiempoEstimado;
    this.remuneracion = remuneracion;
  }
  contarTrabajo() {
    console.log(
      `${this.nombre} me tomara un tiempo estimado de ${this.tiempoEstimado} hrs y recibire $${this.remuneracion}`
    );
  }
}
const persona1 = new Persona("pepe", "argento", 50);
const persona2 = new Persona("juan", "perez", 20);
const persona3 = new Persona("jose", "gonzález", 34);

persona1.agregarTrabajo(new Trabajo("desarrollar un front", 30, 230000));
persona1.agregarTrabajo(new Trabajo("desarrollar una web", 20, 100000));
persona1.agregarTrabajo(new Trabajo("desarrollar un back", 190, 330000));

/* trabajos.forEach((trabajo) => {
  console.log(persona1.trabajos.contarTrabajo);
}); */

/* console.log(persona1.trabajos[0].contarTrabajo()); */
/* console.log(persona2.trabajos[1].contarTrabajo()); */

console.log(persona1.trabajos[0].contarTrabajo());

/* class Proyecto {
  constructor(nombre, precio, categoria, estimado) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.estimado = estimado;
    this.participantes = [];
  }
}

const proyectazo = new Proyecto("Desarrollo", 100000, "Web", 30);

console.log(proyectazo); */
