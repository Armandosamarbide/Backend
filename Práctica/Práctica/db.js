const DB_NAME = 'eCommerceUTN_Noche_LM'
const DB_PORT = 27017
const DB_ADRESS = '127.0.0.1'
const URL_CONNECTION = `mongodb://${DB_ADRESS}:${DB_PORT}/${DB_NAME}`
const mongoose = require('mongoose')
const Producto = require('./models/Producto')



const obtenerProductos = async () => {

    try{
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado')
        const productos = await Producto.find({})
        console.log(productos)
    }
    catch(error){
        console.error(error)
    }
}


const crearProducto = async (titulo, precio, descripcion, stock) =>{
    try{
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado')
        const nuevoProducto =  new Producto({titulo, precio, descripcion, stock})
        const productoNuevo = await nuevoProducto.save()
        console.log('Se guardo el producto:')
        console.log(productoNuevo)
    }
    catch(error){
        console.error("No se pudo conectar")
    }
}

const eliminarProductoporId = async (productoId) => {
    try{
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado')
        const productoEliminado = await Producto.findByIdAndRemove(productoId)
        if(productoEliminado){
            console.log('Producto eliminado')
        }
    }
    catch(error){
        console.error("No se pudo conectar")
    }

}

eliminarProductoporId('651e00a9d6ad733112a777d7')

/* obtenerProductos()
 */
/* crearProducto('Ametralladora Mac-10', 1600, 'La del GTA', 5)
crearProducto('Revolver Ruger Redhawk', 500, 'Te mata 5 veces antes de que toques el suelo', 5)
 */

/* const crearProducto = async (titulo, precio, descripcion, stock) =>{
    mongoose.connect(URL_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Nos conectamos con mongoDB correctamente')
        const nuevoProducto =  new Producto({titulo, precio, descripcion, stock})
        nuevoProducto.save().then((prodGuardado) =>{
            console.log('Se guardo el producto:')
            console.log(prodGuardado)
        }).catch((error) =>{
            console.error('El producto no se pudo guardar')
        })
    })
    .catch((error) =>{
        console.log('No se pudo hacer la conexion con MongoDB')
        console.error(error)
    })
}
crearProducto('Empanada atun y sardina', 600, 'Empanadas muy polemicas', 5) */