const Product = require("../models/productModel")


/* Crear un producto */

const createProduct  = async (product) =>{
    const newProduct = new Product(product)
    try{
        return await  newProduct.save()
    }catch(err){
        console.error(err)
    }
}

const getProducts = async () => {
    return await Product.find({})
}

const deleteProduct = async (pid) =>{
    try{
        const deletedProduct = await Product.findByIdAndDelete(pid)
        if(deletedProduct){
           /*  if(deleteProduct){ */
            return {ok: true, deletedProduct}
        }
        else{
            return {error: 'Producto no encontrado'}
        }
    }
    catch(err){
        return {error: 'id no válido'}
    }
   
}

const getProductById = async (pid) =>{
    try{
        const productFound = await Product.findById(pid) 
    
        if(productFound){
            return {ok: true, productFound}
        }
        else{
            return {error: 'Producto no encontrado'}
        }
    }
    catch(err){
        return {error: 'id no válido'}
    }
   
}

module.exports = {createProduct, getProducts, deleteProduct, getProductById}