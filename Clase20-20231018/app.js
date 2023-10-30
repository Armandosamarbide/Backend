const express = require('express')
const hbs = require('hbs')
const mysql = require('mysql')


const app = express()

app.use(express.urlencoded({extended: false})) // Para poder utilizar formularios. Debe estar, no importa si true o false

const db = mysql.createConnection({
host: 'localhost', 
user: 'root',
password: '',
database: 'clase20-20231018' 
})

db.connect((err) =>{
if(err) {console.log(err)}
else{console.log('Conectado a MySQL')}
}
)

// Handlebars

app.set('view engine', 'hbs')
app.set('views' + __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.get('/posts', (req, res) =>{
    const query = 'SELECT * FROM posts'
    db.query(query, (err, result)=>{
        if(err){
            console.error(err)
            return res.status(500).json({mensaje: 'internal server error'})
        }
        const posts = result
        res.render('posts', {posts})
    })

})

const ID_USUARIO = 1

app.get('/posts/new', (req, res) => {
    res.render('newPost')
})

app.post('/posts/new', (req,res) => {
const {title, content} = req.body

})

app.listen(8080, () =>{
    console.log('Servidor corriendo en http://localhost:8080/posts')
})