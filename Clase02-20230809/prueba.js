class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log("Hola");
  }
  conversar() {
    this.saludar();
    console.log("Cómo estás");
  }
}

const juan = new Persona(
  "Juan"
); /* El new es el indicador de que estamos INSTANCIANDO la clase */

console.log(`Hola, me llamo ${juan.nombre}`);

juan.conversar();
