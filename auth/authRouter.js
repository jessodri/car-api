const express = require('express')
const router = express.Router()
const auth = require('./util')
const { authenticate } = require('./authMiddleware')
const JWT = require('jsonwebtoken')
const User = require('../users/User')


router.post('/login', authenticate, (req, res) => {

    const payload = {
        cat: '300',
        ip: req.connection.remoteAddress
    }

const jwtSecret = process.env.JWT_SECRET

JWT.sign(payload, jwtSecret, (err, token) => {

    if(err) {
        res.status(401)
        throw new Error('Bad token')
    }

    res.set('Authorization', `Bearer ${token}`);
    res.status(200).end()

    })

})

module.exports = router
