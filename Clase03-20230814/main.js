"use strict";
/* let nombre : string = 'Martín' */
const edades = [30, 35, 45, 55]; /* Las edades van a estar en un array, que va a ser numérico */
/* const nombres : string[] = ["Juan", "Pedro"]

const persona : {nombre: string, apellido: string} = {nombre: "Juancito", apellido: "Pérez"}

const decirTipoDato = (dato : any) : void => {
    console.log('El tipo de dato es ' + typeof dato)
} */
/* calcularIva : recibe un precio y devuelve el iva del precio */
/* const calcularIva = (precio: number): void => {
    console.log("El IVA de " + precio + "es: " + (precio * 21) / 100 )
}


const contarHasta = (numero: number): void => {
    
    for (let i: number = 1; i < numero; i++){
    console.log(i)
    }
}

calcularIva(1000)

contarHasta(5) */
/* interface Persona {
    nombre: string,
    apellido: string,
    edad: number
} */
/* const personas: Persona[] = []

personas.push({ nombre: 'Juan', apellido: 'Pérez', edad: 30 }) */
/* Crear un array de objetos con interfaces

libros : Libro[] la interface Libro debe tener las props: titulo, cantPaginas, categoria, autor

productos: Pruducto[] la interface Producto debe tener las props: nombre, precio, id, stock, descripcion

usersConnected : User[] la interface User debe tener las props: nombre, ubicacion, sistemaOperativo

*/
/* interface Libro {
    titulo: string,
    cantPaginas: number,
    categoria: string,
    autor: string
}

const libreria: Libro[] = []

libreria.push({ titulo: 'F-51 Squadrons of the Korean War', cantPaginas: 100, categoria: 'Aviación', autor: 'Mark Postlewaite' })

interface Libro2 {
    titulo: string,
    cantPaginas: number,
    categoria: string,
    autor: Persona
} */
/* productos: Pruducto[] la interface Producto debe tener las props: nombre, precio, id, stock, descripcion */
/* interface Producto {
    nombre: string,
    precio: number,
    id: number,
    stock: boolean,
    stocknumber: number,
    descripcion: string
}

const productos: Producto[] = []

productos.push({ nombre: 'iPhone', precio: 1000000, id: 1, stock: true, stocknumber: 10, descripcion: 'smartphone de Apple' })

console.log(productos[0]) */
/* usersConnected : User[] la interface User debe tener las props: nombre, ubicacion, sistemaOperativo */
/* interface User {
    nombre: string,
    ubicacion: string,
    sistemaOperativo: string
}

const users: User[] = [] */
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.vida = 100;
    }
}
/* HERENCIA */
class Programador extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.teclado = "Red Dragon";
    }
    hacerTrabajo(cantHrs) {
        console.log('Hacer tiki tiki con ' + this.teclado + ' por ' + cantHrs + ' horas');
    }
}
const programador = new Programador('Juan', 20);
programador.hacerTrabajo(20);
/*
Practica de herencia
Crear una clase llamada Entidad con las propiedades:

-nombre
-vida
-danio

y los metodos

presentarse => mostrara por consola 'Hola, mi nombre es nombre'

atacar(objetivo : string) => mostrara por consola 'nombre ataco a objetivo y le inflingio danio daño'

obtenerVida( ) => devolvera la vida actual de la entidad


A partir de la clase Entidad

crear la clase Zombie

nuevas propiedades:

fechaDeMuerte:string

nuevos metodos:
revivir() si la vida es negativa o 0, regenerara la vida a 25 y dira por consola 'REEESURRECIION'


*/
class Entidad {
    constructor(nombre, danio) {
        this.nombre = nombre;
        this.vida = 100;
        this.danio = 30;
    }
    presentarse(nombre) {
        console.log('Hola, soy ' + nombre);
    }
    atacarObjetivo(objetivo) {
        console.log(this.nombre + ' ataca a ' + objetivo + ', y le inflingió un daño de ' + this.danio);
    }
    atacadoPorEnemigo(atacante, danio2) {
        console.log(this.nombre + 'fue atacado por ' + atacante + ', que le inflingió un daño de ' + danio2);
    }
}
class Zombie extends Entidad {
    constructor(nombre, danio) {
        super(nombre, danio);
        this.fechaDeMuerte = '14 de agosto';
    }
}
const stubbs = new Zombie('Stubbs', 30);
stubbs.presentarse('Stubbs');
stubbs.atacarObjetivo('Policía');
stubbs.atacadoPorEnemigo('Policía', 30);
