
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
