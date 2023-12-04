const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

/* Datos de la BBDD */

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'discos'
})

/* Middlewares */

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

/* Ver todos los elementos de la lista */

app.get('api/get', (req, res) => {
    const sqlInsert = "SELECT * FROM discos ORDER BY artista"
    db.query(sqlInsert, (err, result)) => {
         if(err){
            res.status(500).json({content: 'DB error', ok: false})
        }
        else{
            res.status(200).json({products: result, ok: true})
        }

    }
    
})

/* Nuevo elemento */

app.post("/api/new", (req, res) => {
    const album = req.body.album
    const artista = req.body.artista
    const anio = req.body.anio
    const genero = req.body.genero
    const discogs = req.body.discogs

    const sqlInsert = "INSERT INTO discos (album, artista, anio, genero, discogs) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [album, artista, anio, genero, discogs], (err, result) => {
        console.log(err)
        console.log(result)
    } )
})

app.get('/', (req, res) => {
    res.send('Front')
})

app.listen(5174, () => {
    console.log('Servidor corriendo en 5174')
})