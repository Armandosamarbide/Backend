const express = require('express')



const app = express()

app.get('/', (req, res) => {
    res.send('This is the Frontend')
})

app.listen(5174, () => {
    console.log('Servidor corriendo en 5174')
})