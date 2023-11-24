const express = require('express')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddatabase'
})

app.get('/', (req, res)=>{
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Black Hawk Down', 'Kick ass');"
    db.query(sqlInsert, (err, result)=>{
    res.send('Success')
    })
    
})

app.get('/', (req, res) => {
    res.send('This is the Frontend')
})

app.listen(5174, () => {
    console.log('Servidor corriendo en 5174')
})