const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config');
const {AuthenticationError} = require('apollo-server');

module.exports = (context) => {
    //context = {...headers}
    const authHeader = context.req.headers.authorization;

    if(authHeader) {
        const token = authHeader.split('Random ')[1];

        if(token) {
            try {
                const user = jwt.verify(token, SECRET_KEY)
                return user;
            } catch (error){
                throw new AuthenticationError('Invalid token')
            }
        }
        throw new Error('Authentication token not provided')
    }
    throw new Error('Authentication header not provided')
}