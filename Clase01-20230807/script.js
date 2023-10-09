/* Node se ejecuta en la computadora
No dependemos del index.html */
console.log("Hola mundo");

console.log("hola".charAt["1"]);

console.log(
  "La cantidad de palabras del mensaje es " + "hola mundo".split(" ").length
);

/* Tipos de datos: Number, string, boolean, array, null, symbol, undefined, object */
/* Operadores aritméticos: +, -, %, /, * */
/* Condicionales: if, if-else, else, ternario, ? if : else, Switch */
/* Bucles: For, While, Do While, For Of, For In  */
/* Métodos de string: toLowerCase, toUpperCase, Length (NO es método, es propiedad), Repeat, charAt, Concat, includes,*/
/* Métodos de array: Pop, Push, Splice, Shift, Unshift, Join,  */
/* Métodos avanzados de array: Map, For Each, Find, Filter, Some, Every, Sort, Reduce, FindIndex */
/* Funciones:  */

/* Funciones en flecha:  */

/* const saludar = () => {
  console.log("Hola, estoy saludando");
};

saludar(); */

/* (() => { 
    console.log('Hola, qué tal, comunicándonos')
}) */

/* Funciones nombradas */

/* function saludar2() {
  console.log("Buenas");
}

saludar2(); */

/* Objetos

const persona = { nombre: 'martin'; apellido: 'salduna'} */

/* Función constructora (Programación orientada a objetos)
forma antigua */

/* function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

const persona1 = new Persona("martin", "salduna");

console.log(persona1); */

/* Función constructora (Programación orientada a objetos)
forma moderna */

/* class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.trabajos = [];
  }
}

const persona1 = new Persona("juan", "pérez");

console.log(Persona); */

/* Crear la clase PROYECTO con las siguientes propiedades:
-nombre (p:parámetro)
- precio(p)
- categoría(p)
- duración estimada(p)
- participantes: [] */

/* class Proyecto {
  constructor(nombre, precio, categoria, estimado) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.estimado = estimado;
    this.participantes = [];
  }
}

const proyectazo = new Proyecto("Proyecto Uno", 1000, "Desarrollo Web", "100");

console.log(proyectazo); */

/* 
Una vez creada la class proyecto se debera crear el metodo agregarParticipante ( participante)
A su vez crear la class Participante que tendra las propiedades (nombre, apellido, dinero (empieza en 0) y amigos (empieza en array vacio))
  */

/* class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.trabajos = [];
    }
   
}

class Proyecto {
  constructor(nombre, precio, categoria, estimado) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.estimado = estimado;
    this.participantes = [];
    }
    agregarParticipante(persona)
    this.personas.push(persona)
}

const juan = new Persona("Juan", 'Pérez');

console.log(juan) */

/* class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.trabajos = [];
    }
    agregarTrabajo(trabajo) {
        this.trabajos.push(trabajo)
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
const persona1 = new Persona("pepe", "argento");
persona1.agregarTrabajo(new Trabajo("desarrollar un front", 30, 230000));
console.log(persona1.trabajos[0].contarTrabajo()); */

/* 
Una vez creada la class proyecto se debera crear el metodo agregarParticipante ( participante)
A su vez crear la class Participante que tendra las propiedades (nombre, apellido, dinero (empieza en 0) y amigos (empieza en array vacio))


eliminarParticipante(nombre) el metodo eliminarParticipante recibe el nombre y elimina del array al participante

reestimarElProyecto(nueva estimacion) permitira cambiar el tiempo estimado del proyecto

nombrarParticipantes() por cada participante debera decir el nombre y apellido del participante

(Agregar la propiedad remuneracion al participante)
(Agregar el metodo a participante) pagar sueldo () incrementara su dinero por la remuneracion del participante

pagarSueldos() por cada participante activara el metodo pagar sueldo

  */

class Trabajo {
  constructor(nombreTrabajo, cuenta, duracion) {
    this.nombreTrabajo = nombreTrabajo;
    this.cuenta = cuenta;
    this.duracion = duracion;
  }
}

const globant = new Trabajo("Globant", "Verizon", "6 meses");
const wunder = new Trabajo("Wunderman", "Ford", "33 meses");

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.trabajos = [globant];
    this.edad = edad;
  }
  agregarTrabajo(trabajo) {
    this.trabajos.push(trabajo);
  }
}

const juan = new Persona("juan", "perez", 30);

console.log(juan);

/* const juan = new Persona("juan", "pérez", 35);
const pedro = new Persona("pedro", "ramírez", 28); */
