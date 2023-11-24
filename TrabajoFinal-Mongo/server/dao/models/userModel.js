/* Cómo va a ser nuestro usuario */

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
})

const User = mongoose.model('user', userSchema)

module.exports = User