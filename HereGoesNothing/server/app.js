const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'discos'
})

/* Verificar la conexión a la BBDD */

db.connect((err) =>{
    if(err){
        console.error(err)
    }
    else{
        console.log('Conectado a la BBDD')
    }
})

/* Mostrar todos los elementos (READ) */

app.get('/api/discos', (req, res) =>{
    const query = 'SELECT * FROM discos ORDER BY artista ASC'
    db.query(query, (err, result) =>{
        if(err){
            res.status(500).json({content: 'Error en la BBDD', ok: false})
        }
        else{
            res.status(200).json({discos: result, ok: true})
        }
    })
})

/* Nuevo elemento (CREATE) */

app.post("/api/new", (req, res) => {
    const album = req.body.album
    const artista = req.body.artista
    const anio = req.body.anio
    const genero = req.body.genero
    const discogs = req.body.discogs

    const sqlInsert = "INSERT INTO discos (album, artista, anio, genero, discogs) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [album, artista, anio, genero, discogs], (err, result) => {
        if(err){
            res.status(500).json({content: 'Error insertar nuevo disco', ok: false})
        }
        else{
            res.status(200).json({discos: result, ok: true})
        }
    } )
})

/* Eliminar elemento (DELETE) */

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