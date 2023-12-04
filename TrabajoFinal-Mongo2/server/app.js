const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const productRouter = require('./routers/productRouter')

dotenv.config()

const mongoose = require('./config/dbConfig')
const app = express()
const PORT = process.env.PORT || 8080 /* Si no existe, usa el 8080 */

app.use(express.static(path.join(__dirname + '/public'))) /* De dónde tomar los archivos estáticos, como CSS */

app.use('/api/products', productRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`)
})