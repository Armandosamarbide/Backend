/* Mostrar datos: método GET
Actualizar datos: método PUT
Enviar datos: método POST 
Borrar datos: método DELETE */


/* ENDPOINT: /api/products
GET - obtener todos los productos
GET - obtener un producto por ID: /api/products/:id
DELETE - eliminar un producto por ID:  /api/products/:id
DELETE - eliminar todos los productos: /api/products
PUT - actualizar el stock de un productos: /api/products/:id
POST - crear un producto nuevo: /api/products/
PUT - actualizar precio de producto por id: */

const express = require('express')
const cors = require('cors')
const PORT = 8080
const app = express()
/* Middleweres */
app.use(cors())
app.use(express.json()) /* Habilita pasar JSON */
const routerProducts = require('./router/routerProducts')
app.use('/api/products', routerProducts)
app.get('/', (req, res) =>{
    res.send('<h1 style="color: red;">Try it now</h1>')
})

app.listen(PORT, ()=>{
    console.log(`El servidor se esta alojando en http://localhost:${PORT}/`)
})
