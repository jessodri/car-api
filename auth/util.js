function isAuthenticUser(email, password) {
    const user = {
        email: "hello@live.com",
        password: "123"
    }

    if(email === user.email && password === user.password) {
        return true
    } return false 
}

module.exports = {
 isAuthenticUser
}