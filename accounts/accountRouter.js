const express = require('express')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')

router.get('/', authorize, (req, res) => {

    const user = {
        id: 1,
        email: "hello@live.com",
        favourites: [
            'Alpha',
            'Ferrari',
            'Rolls Royce'
        ]
    }

    res.status(200).json(user)

})

module.exports = router