/* Crear una conexión: el sitio se va a ver en esa página */

const express = require('express')
const mysql = require('mysql')
const app = express()

const PORT = 4000

app.listen(PORT, () =>{
    console.log(`El servidor está en https://localhost:${PORT}`)
})