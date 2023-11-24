const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')

const PORT = 4000

app.use(cors())

/* const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_ecommerce_utn_lu_mi'
}) */

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'discos'
})

db.connect((err) =>{
    if(err){
        console.error(err)
    }
    else{
        console.log('Conectado')
    }
})


/* app.get('/api/products', (req, res) =>{ */ 
/* Cambiamos /products por /discos */

app.get('/api/discos', (req, res) =>{
    const query = 'SELECT * FROM discos'
    db.query(query, (err, result) =>{
        if(err){
            res.status(500).json({content: 'DB error', ok: false})
        }
        else{
            res.status(200).json({discos: result, ok: true})
        }
    })
})

/* app.get('/api/product/:pid', (req, res) =>{
    const {pid } = req.params
    const query =  'SELECT * FROM products WHERE id = ?'
    db.query(query, [pid], (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({ok:false, error: 'Problemas al intentar buscar el producto en la DB'})
        }
        else{
            if(result){
                res.json({product: result[0], ok: true})
            }
            else{
                res.status(404).json({ok:false, error: 'Producto no encontrado'})
            }
        }
    })

}) */

app.get('/api/disco/:pid', (req, res) =>{
    const {pid } = req.params
    const query =  'SELECT * FROM products WHERE id = ?'
    db.query(query, [pid], (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({ok:false, error: 'Problemas al intentar buscar el producto en la DB'})
        }
        else{
            if(result){
                res.json({product: result[0], ok: true})
            }
            else{
                res.status(404).json({ok:false, error: 'Producto no encontrado'})
            }
        }
    })

})

/* Borrar disco */

app.delete('/api/product/:pid', (req, res) =>{

    const {pid} = req.params
    const query = 'DELETE FROM products WHERE id = ?'
    db.query(query, [pid], (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({ok: false, error: 'No se pudo eliminar el producto'})
        }
        else{
            res.status(200).json({ok:true})
        }
    })

})



app.put('/api/product/:pid', (req, res) =>{
    const {pid} = req.params
    const {stock} = req.query
    if(!stock){
        return res.status(400).json({error: 'Falta el parámetro stock', stock: false})
    }

    const query =  'UPDATE products SET stock = ? WHERE id = ?'
    db.query(query, [stock, pid], (err, result) =>{
        console.log(result)
        if(err){
            console.error(err)
            res.status(500).json({error: 'No se pudo actualizar el producto', ok:false})
        }
        else{
            const query = 'SELECT * FROM products WHERE id = ?'
            db.query(query, [pid], (err, result) =>{
                if(!err){
                    res.status(200).json({mensaje: 'Producto actualizado correctamente', ok: true, product: result[0]})
                }
            } )
           
        }
    })
})

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})