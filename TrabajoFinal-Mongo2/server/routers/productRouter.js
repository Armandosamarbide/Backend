const express = require('express')
const { createProduct, getProducts } = require('../dao/controllers/productController')
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    res.json({ok: true, products: await getProducts()})
})

productRouter.post('/', async (req, res) =>{
    const {nombre, precio, stock, descripcion, thumbnail} = req.body
    await createProduct({nombre, precio, stock, descripcion, thumbnail})
    res.json({ok:true, products: await getProducts()})
})

module.exports = productRouter