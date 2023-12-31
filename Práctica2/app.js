const express = require('express')
const hbs = require('hbs')
const mysql = require('mysql')

const app = express()

//Middlewares

app.use(express.urlencoded({extended: false}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clase20-20231018'
})

db.connect((err) =>{
    if(err){
        console.error(err)
    }
    else{
        console.log('Conectado a MySQL')
    }
})

//Handlebars CONFIG

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

app.post('/posts/new', (req, res) =>{
    const {title, content} = req.body
    if(!title || !content){
        return res.render('newPost', {error: 'No completaste los campos'})
    }

    const query =  'INSERT INTO posts (fk_id_user, title, content) VALUES (?, ?, ?)'

    db.query(query, [ID_USUARIO, title, content], (err, result) =>{
        if(err) {
            console.error(err)
            return res.render('newPost', {error: 'Ha habido un error al intententar crear el post, intenta mas tarde'})
        }
        res.redirect('/posts')
    })
    
})

app.listen(8080, () =>{
    console.log('El servidor se esta escuchando en http://localhost:8080/posts')
})