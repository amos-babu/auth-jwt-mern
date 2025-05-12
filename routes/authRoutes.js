const express = require('express');
const router = express.Router()
const { register, login, homeRoute, logout } = require('../controllers/authController');
const {registerValidator, loginValidator} = require('../middlewares/validators');
const { validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/register', registerValidator, (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
}, register )

router.post('/login', loginValidator, (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
}, login )

router.get('/home', verifyToken, homeRoute)
router.post('/logout', verifyToken, logout)


module.exports = router;