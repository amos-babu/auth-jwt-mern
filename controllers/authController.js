const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
    
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            name,
            email,
            password: hashedPassword
        })
    
        await user.save()
    
        res.status(201).json({ user, message: "User Created Successfully" });
    } catch (error) {
        res.status(500).json({ message: "An Error Occurred! ", error})
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).json({ error: "No User by that email found!"})
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({ error: "Authentication Failed!" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h',
        });

        res.status(200).json({accessToken: token, message: "Login Successfull!"})
        
    } catch (error) {
        res.status(500).json({ message: 'Login Failed!'})
    }
}

const homeRoute = (req, res) => {
    res.status(200).json({ message: "Welcome, Home"});
}

const logout = (req, res) => {
    res.status(200).json({ message: "Welcome, Home"});
}

module.exports = {
    register,
    login,
    homeRoute,
    logout
}