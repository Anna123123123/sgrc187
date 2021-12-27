const createError = require('http-errors')
const ValidationError = require('../dtos/errors.dto')


//func errorsHandler
module.exports = function (err, req, res, next) {
    console.log(err)
    if (err instanceof ValidationError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors })
    }
    return res.status(500).json('Непредвиденная ошибка')
}

