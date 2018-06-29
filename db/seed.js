const Car = require('../cars/Car')
const User = require('../users/User')


const cars = Car.create([
    {
        "model": "Toyota",
        "price": 2300,
        "color": "Red"
    },
    {
        "model": "Ferrari",
        "price": 2600,
        "color": "Purple"
    }
])

const users = User.create([
    {
        "email": "jess@example.com",
        "password": 123
    }
])