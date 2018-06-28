const express = require('express')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')

router.get('/', authorize, (req, res) => {
    res.status(200).json({
        cars: ["Toyota", "Holden", "Tesla"]
    })
})

module.exports = router