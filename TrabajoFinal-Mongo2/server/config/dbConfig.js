/* Conexión a Mongo: en caso de no conectar, "catcheamos" el error y lo mostramos por consola */

const mongoose = require('mongoose')
const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING + 'productos_utn_noche', {
    useNewUrlParser: true, 
})
.then(() => {
    console.log('Conectado a la BBDD')
})
.catch((err) => {
    console.log(err)
})

module.exports = mongoose