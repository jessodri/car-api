const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const permit = require('permit')

//auth router
const authRouter = require('./auth/authRouter')
const accountRouter = require('./accounts/accountRouter')
const carsRouter = require('./cars/carsRouter')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/account', accountRouter)
app.use('/cars', carsRouter)

app.listen(3000, () => {
    console.log("Is anybody on 3000")
})