const mongoose = require('mongoose')

const url = 'mongodb://localhost/cars'
mongoose.connect(url)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Yeah!! Connection made to mongodb!!')
})

module.exports = mongoose