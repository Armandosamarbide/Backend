/* Función para controlar la creación del producto */

const Product = require('../models/productModel')

/* Creamos una nueva variable que será igual a una nueva instancia del producto definido en el modelo de Producto.
Si está bien creado, lo retorna. Si da error, lo muestra por consola. */

const createProduct  = async (product) =>{
    const newProduct = new Product(product)
    try{
        return await newProduct.save()
    }catch(err){
        console.error(err)
    }
}

const getProductById = async (pid) =>{
    return await Product.findById(pid)
}

const getProducts = async () => {
    return await Product.find({})
}

const deleteProduct = async (pid) =>{
    try{
        const deletedProduct = await Product.findByIdAndDelete(pid)
        if(deleteProduct){
            return {ok: true, deletedProduct}
        }
        else{
            return {error: 'Producto no encontrado'}
        }
    }
    catch(err){
        return {error: 'id no valido'}
    }
   
}

/* Desarrolla la ruta para crear productos */

module.exports = {createProduct, getProducts, deleteProduct, getProductById}