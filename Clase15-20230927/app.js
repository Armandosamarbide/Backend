const express = require('express')
const cors = require('cors')
const PORT = 8080
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))


app.get("/hola", (req, res) => {
    res.send(`
        <h1>Hola, ¿qué tal? Comunicándonos con vos</h1>
        <img src='/imagenes/mirage.jpg' width='200px'>
        <script src='/js/script.js'></script>
    `);
});

app.get('/login', (req, res) =>{
    res.render('login')
})

const products = [
    {
        nombre: 'samsung tv 45"',
        price: 450,
        image: '/imagenes/televisor.jpg',
        id: 1
    },
    {
        nombre: 'notebook',
        price: 400,
        image: '/imagenes/notebook.jpg',

        id: 2
    },
]

app.get('/products', (req, res) =>{
    res.render('products', {products})
})

app.get('/products/:id', (req, res) =>{
   /* Obtener el id del producto y dárselo al archivo handlebard */
})

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}/`);
});