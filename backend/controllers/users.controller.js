const mongoose = require('mongoose')
const model = require('../models')
const UserService = require('../services/users.service')


/* 

...model.Users.find().select("_id body title") 

*/

// @FETCH all Objects
exports.getUsers = async (req, res, next) => {
    try {
        const FETCH_DB_COLLECTIONS = await model.Users.find()
        res.json(FETCH_DB_COLLECTIONS)

    } catch (err) {
        next(err)
    }
};


exports.signup = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const newUser = await UserService.signup(email, password)
        //храним в куках refresh токен
        //для работы res.cookie нужна middleware "cookieParser"
        res.cookie('refreshToken', newUser.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })  //secure добавить для https
        return res.status(200).json(newUser)
    } catch (err) {
        next(err)
    }
}

exports.deleteUsers = async (req, res, next) => {
    try {
        await model.Users.deleteMany()
        return res.status(200).send('Data deleted')
    } catch (err) {
        next(err)
    }
}


exports.login = async (req, res, next) => {
    try {
        // Read username and password from request body
        const { email, password } = req.body;

        /**
         * Login service: 
         * Filter user from the users array by username and password
         * Generated tokens
        */
        const newUser = await UserService.login(email, password)

        res.cookie('refreshToken', newUser.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })  //secure добавить

        return res.status(200).json(newUser)
    } catch (err) {
        next(err)
    }
}


exports.activation = async (req, res, next) => {
    try {
        // Получаем ссылку от пользователя
        const activationLink = await req.params.link;
        await UserService.link(activationLink)
        return res.redirect(process.env.CLIENT_URL)
    } catch (err) {
        next(err)
    }
}

exports.logout = async (req, res, next) => {
    try {
        // destructuring entry "refreshToken" in cookie
        const { refreshToken } = req.cookies

        // Do "Log Out" (optional: send "token" if needed)
        const token = await UserService.logout(refreshToken)

        // clear cookie
        res.clearCookie('refreshToken')

        // return result
        return res.status(200).send('Log-out success!')//.redirect('http://localhost:3000') //редирект на основную 
    } catch (err) {
        next(err)
    }
}

exports.refresh = async (req, res, next) => {
    try {
        console.log('####-REFRESH-#####')
        const { refreshToken } = req.cookies

        const newUser = await UserService.refresh(refreshToken)

        res.cookie('refreshToken', newUser.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })  //secure добавить

        return res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }

}