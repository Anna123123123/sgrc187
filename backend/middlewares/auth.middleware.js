const ValidationError = require('./errorHandlers.middleware')
const TokenService = require('../services/token.service')

//Authorization: Bearer <token>
module.exports = function (req, res, next) {
    try {
        //req.headers["x-access-token"] || req.headers.authorization () || req.body.token;
        //or headers.authorization  
        const authorizedHeader = req.headers.authorization || req.headers['authorization'] || req.headers["x-access-token"] || req.body.token
        console.log('authorizedHeader', authorizedHeader)
        if (!authorizedHeader || authorizedHeader == null) {
            return next(ValidationError.UnauthorizedError)
        }

        const accessToken = authorizedHeader.split(' ')[1]
        if (!accessToken) {
            return next(ValidationError.UnauthorizedError)
        }

        const userData = TokenService.validationAccess(accessToken)
        if (!userData) {
            return next(ValidationError.UnauthorizedError)
        }

        req.user = userData

        console.log('userData', userData)
        console.log('req.user', req.user)
        next()

    } catch (err) {
        return next(ValidationError.UnauthorizedError)
    }
}