const DB_NAME = 'eCommerceUTN_Noche_LM'
const DB_PORT = 27017
const DB_ADRESS = '127.0.0.1'
const URL_CONNECTION = `mongodb://${DB_ADRESS}:${DB_PORT}/${DB_NAME}`
const mongoose = require('mongoose')
const Producto = require('./models/Producto')

const obtenerProductos = async () =>{ 
    try {
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Nos conectamos con mongoDB correctamente')
        const productos =  await Producto.find({})
        console.log(productos)
    }
    catch(error){
        console.error(error)

    }
}

const eliminarProductoPorId = async (productoId) =>{
    try{
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Nos conectamos con mongoDB correctamente')
        const productoEliminado = await Producto.findByIdAndRemove(productoId)
        if(productoEliminado){
            console.log('Producto eliminado con exito')
        }
        else{
            console.log('Producto no encontrado')
        }
    }
    catch(error){
        console.error("No se pudo conectar correctamente MongoDB")
    }
}

const actualizarStockById = async (stock, id) =>{
    try{
        await mongoose.connect(URL_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const productoActualizado =  await Producto.findByIdAndUpdate(id, {stock: stock}, {new: true})
        if(productoActualizado){
            console.log('stock actualizado:')
            console.log(productoActualizado)
        }
        else{
            console.log('No se encontro producto por ese id')
        }
    }
    catch(error){
        console.error("No se pudo conectar correctamente MongoDB")
    }
}