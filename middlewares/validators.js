const { check } = require('express-validator')

const registerValidator = [
  check('name', 'Name is required and should be at least 3 characters')
    .isLength({ min: 3 }),
  check('email', 'Enter a valid email')
    .isEmail(),
  check('password', 'Password should be at least 6 characters')
    .isLength({ min: 6 })
]

module.exports = registerValidator
