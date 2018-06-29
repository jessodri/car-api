const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String,
    password: String
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel