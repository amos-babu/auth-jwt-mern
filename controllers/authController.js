const User = require('../models/userModel')

const register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = new User({
            name,
            email,
            password
        })
    
        await user.save()
    
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "An Error Occurred! ", error})
    }
}

const login = (req, res) => {
    res.send('Login')
}

const homeRoute = (req, res) => {
    res.send('home page')
}

module.exports = {
    register,
    login,
    homeRoute
}