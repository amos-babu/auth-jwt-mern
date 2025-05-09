const express = require('express');
const router = express.Router()
const { register, login, homeRoute } = require('../controllers/authController');

// const timelog = (req, res, next) => {
//     res.send(`time is ${Date.now()}`)
//     next()
// }

// router.use(timelog)

router.post('/register', register)
router.post('/login', login)
router.get('/home', homeRoute)


module.exports = router;