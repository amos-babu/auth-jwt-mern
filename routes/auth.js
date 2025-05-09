const express = require('express');
const router = express.Router()
const { register, login, homeRoute } = require('../controllers/authController');
const registerValidator = require('../middlewares/validators');
const { validationResult } = require('express-validator');

router.post('/register', registerValidator, (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
}, register)

router.post('/login', login)
router.get('/home', homeRoute)


module.exports = router;