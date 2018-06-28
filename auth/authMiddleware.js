const auth = require('./util')
const { Bearer } = require('permit')
const JWT = require('jsonwebtoken')

const permit = new Bearer({
    query: 'access_token',
})


module.exports = {
    authenticate,
    authorize
}

function authenticate(req, res, next) {
    
    const {email, password} = req.body

    const authed = auth.isAuthenticUser(email, password)
    if(!authed) {
        res.status(401)
        next(new Error('You\'re not worthy'))
    }

    next()

}

function authorize(req, res, next) {

    const token = permit.check(req)
    const jwtSecret = process.env.JWT_SECRET
    JWT.verify(token, jwtSecret, (err, payload) => {

        if(err) {
            permit.fail(res)
            throw new Error('You\re still not worthy, peasant')
        }
        next()
    })

}
