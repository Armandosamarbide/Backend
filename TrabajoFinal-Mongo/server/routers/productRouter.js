const express = require('express')
const { createProduct, getProducts, deleteProduct, getProductById } = require('../dao/controllers/productController')
const productRouter =  express.Router()

productRouter.get('/', async (req, res) => {
    res.json({ok: true, products: await getProducts()})
})

productRouter.post('/', async (req, res) =>{
    const {nombre, precio, stock, descripcion} = req.body
    await createProduct({nombre, precio, stock, descripcion})
    res.json({ok:true, products: await getProducts()})
})

productRouter.delete('/:pid', async(req, res) =>{
    const {pid} = req.params
    let result = await deleteProduct(pid)
    if(result.ok){
        return res.json(
            {
                ok: true, 
                products: await getProducts(), 
                deleteProduct: result.deletedProduct
            }
        )
    }
    else{
        return res.status(404).json({ok: false, error: result.error})
    }
})

productRouter.get('/:pid', async (req, res) => {
    const {pid} = req.params
    let product = await getProductById(pid)
    if(product){
        res.status(200).json({ok:true, product})
    }
    else
    {
        res.status(404).json({ok:false, error: 'Producto no encontrado'})
    }
})

module.exports  = productRouter