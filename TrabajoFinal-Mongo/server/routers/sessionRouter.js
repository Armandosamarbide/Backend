const express = require('express')
const { createUser } = require('../dao/controllers/userController')
const sessionRouter = express.Router()

sessionRouter.post('/', async (req, res) =>{
    const {nombre, email, password} = req.body
    const newUser = await createUser({nombre, email, password})
    if(newUser){
        res.status(200).json({ok: true, content: 'Usuario creado'})
    }
})


module.exports = sessionRouter