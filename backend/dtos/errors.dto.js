
/**
 * throw createError(status, message, properties) 
 * для вызова функции используем
 * var err = new createError.NotFound()
*/


/** 
 * @ 400 Bad Request Error:
 * Used when user fails to include a field (like no credit card information in a payment form)
 * Also used when user enters incorrect information (Example: Entering different passwords in a password field and password confirmation field).
 * @ 401 Unauthorized Error: 
 * Used when user enters incorrect login information (like username, email or password).
 * @ 403 Forbidden Error: 
 * Used when user is not allowed access the endpoint.
 * @ 404 Not Found Error: 
 * Used when the endpoint cannot be found.
 * @ 500 Internal Server Error: 
 * Used the request sent by the frontend is correct, but there was an error from the backend.
*/

/**
 * Функции промежуточного обработчика для обработки ошибок определяются так же, как и другие функции промежуточной обработки, но с указанием для функции обработки ошибок не трех, а четырех аргументов. 
 * Избегать UnhandledPromiseRejection в версиях ниже 5 express
*/


// const notFound = (err, req, res, next) => {
//     // const error = new Error(`Not founded - ${req.originalUrl}`)
//     // res.status(404);
//     // res.err(err.message);
//     const error = new createError(404, `Эта страница не существует - ${req.originalUrl}`)
//     next(error);
// }


/**  
 * app.use((error, req, res, next) => {
    // Bad request error
    res.status(400)
    res.json() 
*/



//const ApiError = require('./ApiErrors')
//module.expors
module.exports = class ValidationError extends Error {
    // status;
    // errors;

    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors

    }

    static UnauthorizedError() {
        return new ValidationError(400, message)
    }

    static BadRequest(message, errors = []) {
        return new ValidationError(400, message, errors)
    }
}
