const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

/* Conexión a la BBDD */

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddatabase'
})

/* Middlewares */

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

/* Ver todos los elementos de la tabla */

app.get('/api/get', (req,res)=>{

    const sqlSelect = "SELECT * FROM movie_reviews"
    db.query(sqlSelect, (err,result) => {
        res.send(result)
    })
})

/* Creación de un nuevo elemento */

app.post('/api/insert', (req,res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err,result) => {
        console.log(err)
    })
})

/* Eliminación de un elemento */

app.delete('/api/delete/:movieName', (req, res) => {
    const name = req.params.movieName
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?"
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    })
})

/* Actualización de un elemento */

app.put('/api/update', (req, res) => {
    const name = req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?"
    db.query(sqlUpdate, [review,name], (err, result) => {
        if (err) console.log(err)
    })

})

app.get('/', (req, res) => {
    res.send('This is the Frontend')
})

app.listen(5174, () => {
    console.log('Servidor corriendo en 5174')
})