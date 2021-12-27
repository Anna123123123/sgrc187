const { body, validationResult } = require('express-validator');
const { BadRequest } = require('../errorHandling')

exports.createUsers = () => {
    body('email', 'Поле пустое').notEmpty()

    body('email').isEmail()
    body('password').isLength({ min: 3, max: 32 })

    //errors
    const errors = validationResult(req) //req.validationResult()
    if (!errors.isEmpty()) {
        return next(BadRequest())
    }
}