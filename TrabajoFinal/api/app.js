const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')

const PORT = 4000

app.use(cors())

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
        console.log('Conectado a la BBDD')
    }
})


app.get('/api/discos', (req, res) =>{
    const query = 'SELECT * FROM discos'
    db.query(query, (err, result) =>{
        if(err){
            res.status(500).json({content: 'Error en la BBDD', ok: false})
        }
        else{
            res.status(200).json({products: result, ok: true})
        }
    })
})

app.get('/api/disco/:did', (req, res) =>{
    const {did } = req.params
    const query =  'SELECT * FROM cds WHERE id = ?'
    db.query(query, [did], (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({ok:false, error: 'Problemas al intentar buscar el album en la DB'})
        }
        else{
            if(result){
                res.json({product: result[0], ok: true})
            }
            else{
                res.status(404).json({ok:false, error: 'Album no encontrado'})
            }
        }
    })

})


app.delete('/api/disco/:did', (req, res) =>{

    const {did} = req.params
    const query = 'DELETE FROM discos WHERE id = ?'
    db.query(query, [did], (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({ok: false, error: 'No se pudo eliminar'})
        }
        else{
            res.status(200).json({ok:true})
        }
    })

})



app.listen(PORT, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})