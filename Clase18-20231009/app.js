const express =  require('express')
const session = require('express-session')
const mongoose =  require('mongoose')
const hbs = require("hbs")

const PORT = 7070
const app = express()

// Middlewares

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

// Middleware, estamos habilitando esta sesión con estos parámetros

const session_params = {
    secret: 'keySecret',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false} /* Si usáramos HTTP debería ir true */
}

app.use(session(session_params))

// Configuramos Handlebars

app.set('view engine','hbs')
app.set('views', __dirname + '/views')

// MongoDB

const DB_NAME = `eCommerceUTN_Noche_LM`
const DB_PORT = 27017
const DB_ADRESS = `127.0.0.1`
const URL_CONNECTION = `mongodb://${DB_ADRESS}:${DB_PORT}/${DB_NAME}`

mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )

const database = mongoose.connection;

database.on('error', () => {
    console.log('Error de conexión')
})
database.once('open', () => {
console.log('Conectado a MongoDB')
})

// Los usuarios en la BBDD van a tener esta forma

const User = mongoose.model('User',{
username: String,
password: String

})

// Endpoints

app.get('/', (req, res) =>{
    if(req.session.user){
        res.render('home', {user: req.session.user})
    }else{
        res.render('login')
    }
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.post('/login', async (req, res)=>{
    const {username, password} = req.body
    const user =  await User.findOne({username}) //busca en la db al usuario con este username
    if(user){
        req.session.user = user
        res.redirect('/')
    }else{
        res.render('login', {error:'Credenciales invalidas' })
    }
})

app.get('/register', (req, res) =>{
    res.render('register')
})

app.post('/register', async (req, res) =>{
    const {username, password} = req.body
    const usuarioExistente =  await User.findOne({username})
    if(usuarioExistente){
        res.render('register', {error: 'El nombre de usuario ya esta siendo utilizado'})
    }else{
        const newUser = new User({username, password})
        await newUser.save()
        res.redirect('/login')
    }
})

app.get('/logout', (req, res) =>{
    req.session.destroy()
    res.redirect('/')
})

app.listen(PORT, () =>{
    console.log(`Su servidor se esta ejecutando en http://localhost:${PORT}/`)
})