const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const carSchema = new Schema({
    model: String,
    price: Number,
    color: String
})

const carModel = mongoose.model('Car', carSchema)

module.exports = carModel