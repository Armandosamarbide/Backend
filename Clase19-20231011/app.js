const express =  require('express')
const session = require('express-session')
const mongoose =  require('mongoose')
const hbs = require("hbs")
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')

dotenv.config()

const e = require('cors')


const app = express()

//Middleweres

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

const session_params ={
    secret: 'keySecret',
    resave: false,
    saveUnitialized: true,
    cookie: {secure: false}
}
app.use(session(session_params))

//Configurando Handlebars

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

//MongoDB/Mongoose config 
const ADMIN_USER = process.env.ADMIN_USER
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
const DB_NAME = 'eCommerceUTN_Noche_LM'

let original_password = process.env.ADMIN_PASSWORD
let hashedPass

bcrypt.genSalt(10, (err,salt) => {
    if(err) {
        console.log('Error al generar la sal')
    } else {
        bcrypt.hash(original_password, salt, (err, hash) => {
            if(err){
            console.log('Error al hashear la password')
        }else {
            hashedPass = hash
            console.log('Contraseña hasheada correctamente', hashedPass)
        }
        })
    }
})

const verificarPass = (password) => {
bcrypt.compare(password, hashedPass, (err, result) => {
if(err){
    console.log('Error al comparar las passwords')
} else if(result){
    console.log('El password es válido')
} else{
    console.log('Password inválido')
}

})
}

setTimeout( () => {
verificarPass('admin123')
},3000)

const DB_PASSWORD = process.env.DB_PASSWORD
const URL_CONNECTION = `mongodb+srv://martinsalduna:${DB_PASSWORD}@cluster0.whkul1t.mongodb.net/${DB_NAME}`

mongoose.connect(URL_CONNECTION, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
const database = mongoose.connection;

database.on('error', () =>{
    console.log('Error al conectarse a MongoDB')
})
database.once('open', () =>{
    console.log('Conectado a MongoDB')
})

// Modelo de usuario

const User = mongoose.model('User', {
    username: String, 
    password: String
})

// Modelo de producto

const Product = mongoose.model('Product', {
    nombre: String, 
    stock: Number,
    precio: Number,
    descripcion: String
})

// Ver todos los productos

//Endpoints:


app.get('/', (req, res) =>{
    if(req.session.user){
        res.render('home', {user: req.session.user, isAdmin: req.session.isAdmin})
    }else{
        res.render('login')
    }
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.post('/login', async (req, res)=>{
    const {username, password} = req.body
    if(username == ADMIN_USER && password == ADMIN_PASSWORD){
        req.session.isAdmin = true
        req.session.user = {username: 'administrador'}
        return res.redirect('/')
    }
    const user =  await User.findOne({username}) //busca en la db al usuario con este username
    if(user){
        req.session.isAdmin = false
        req.session.user = user
        res.redirect('/')
    }else{
        res.render('login', {error:'Credenciales inválidas' })
    }
})

app.get('/register', (req, res) =>{
    res.render('register')
})

app.get('/products', (req,res) => {
    res.render('products')
})

app.post('/register', async (req, res) =>{
    const {username, password} = req.body
    const usuarioExistente =  await User.findOne({username})
    if(usuarioExistente){
        res.render('register', {error: 'El nombre de usuario ya existe'})
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

app.get('/error', (req,res) => {
    res.render('error')
})

const PORT = process.env.PORT || 7070 /* Quiere decir que use el valor en PORT; si no existe, use 7070
 */
app.listen(PORT, () =>{
    console.log(`El servidor se está ejecutando en http://localhost:${PORT}/`)
})

console.log(process.env.PORT)