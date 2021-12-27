const jwt = require('jsonwebtoken')
const model = require('../models')


class TokenService {
    // В базе можно хранить сколько угодно refresh токенов на один userId,

    // ? реализовать выйти со всех устройств для того чтобы удалить все refresh токены

    //проблема с забиванием базы устаревшими токенами решается написанием утилиты, которая раз в сутки / неделю / месяц чекает каждый токен на живучесть и сносит его, если помер.

    //payload = {id, password, name}

    generateAccessAndRefreshTokens(payload) {
        //jwt(data, signature, time);
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: '1h' })

        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, { expiresIn: '28d' })


        return {
            accessToken,
            refreshToken
        }
    }

    // Удаление экспайрет токены доделать
    async save(userId, token) {
        const tokenData = await model.Token.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = token;
            return tokenData.save();
        }
        const newToken = await model.Token.create({ user: userId, refreshToken: token })
        return newToken;
    }

    async find(token) {
        const newToken = await model.Token.findOne({ refreshToken: token })
        return newToken
    }

    async delete(token) {
        const newToken = await model.Token.deleteOne({ refreshToken: token })
        return newToken
    }

    validationRefresh(token) {
        try {
            const refreshToken = jwt.verify(token, process.env.JWT_REFRESH_TOKEN)
            return refreshToken
        } catch (err) {
            return null
        }
    }

    validationAccess(token) {
        try {
            const accessToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
            return accessToken
        } catch (err) {
            return null
        }
    }
}

module.exports = new TokenService()