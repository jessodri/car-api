const express = require('express')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')
const Car = require('./Car')

router.get('/', authorize, (req, res) => {

    Car.find()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })

})

module.exports = router