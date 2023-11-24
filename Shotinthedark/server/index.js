const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddatabase'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

/* Ver todos los elementos de la tabla */

/* app.get('/api/get', (req,res)=>{

    const sqlSelect = "SELECT * FROM movie_reviews"
    db.query(sqlSelect, (err,result) => {
        res.send(result)
    })
}) */

/* Creación de un nuevo elemento en la tabla  */

app.post('/api/insert', (req,res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err,result) => {
        console.log(err)
    })
})



/* app.get('/', (req, res)=>{
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Black Hawk Down', 'Kick ass');"
    db.query(sqlInsert, (err, result)=>{
    res.send('Success')
    }) 
}) */

app.get('/', (req, res) => {
    res.send('This is the Frontend')
})

app.listen(5174, () => {
    console.log('Servidor corriendo en 5174')
})