const argon2 = require('argon2')
const uuid = require('uuid')
const model = require('../models')
const MailService = require('./mail.service')
const TokenService = require('./token.service')
const UserDto = require('../dtos/users.dto')
const ValidationError = require('../dtos/errors.dto')


// class AuthService {
//     public async name // для typescript
//public - это есть сокращение this.name = name в typescript


class UserService {
    async signup(email, password) {

        /**
         * 1) Проверяем существует ли пользователь в БД
         * Если существует то выбрасываем ошибку 
        */

        const userExist = await model.Users.findOne({ email }) //req.body.email нет потому что мы берем значения из параметров функции //{ email: email }

        if (userExist) {
            throw ValidationError.BadRequest(`${userExist} уже занят`)
        }

        /**
        * 2) Генерируем для пользователя пароли и ссылку подтверждения, создаем запись в БД с этими параметрами 
        */

        //bcypt  
        // const passwordHashed = await bcrypt.hash(password, 5, (err, hash) => { console.log(err) })

        //Hash password only if the password has been changed or is new
        // if(!user.isModified('password')) return next();

        const passwordHashed = await argon2.hash(password)
        const activationLink = await uuid.v4()

        //вынести в функию

        const userRecord = await model.Users.create({ email, password: passwordHashed, activationLink }) //or {email} потому что {email: email}
        await MailService.send(email, `${process.env.API_URL}/activation/${activationLink}`)

        const userDto = new UserDto(userRecord)
        const tokens = TokenService.generateAccessAndRefreshTokens({ ...userDto })
        await TokenService.save(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }


    async link(activationLink) {
        const user = await model.Users.findOne({ activationLink })

        if (!user) {
            throw ValidationError.BadRequest('Неккоректная ссылка активации')
        }

        user.isActivated = true;

        await user.save();
    }


    async login(email, password) {
        // Find user 
        const candidate = await model.Users.findOne({ email })

        // Check
        if (!candidate) {
            const error = ValidationError.BadRequest('Не правильный логин или пароль', 401)
            return next(error)
        }

        // Compare password
        const isPassEquals = await argon2.verify(candidate.password, password)

        // Check
        if (!isPassEquals) {
            const error = ValidationError.BadRequest('Не правильный логин или пароль', 401)
            return next(error)
        }

        const userDto = new UserDto(candidate)
        const tokens = TokenService.generateAccessAndRefreshTokens({ ...userDto })

        await TokenService.save(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto }

    }


    async logout(refreshToken) {
        const token = await TokenService.delete(refreshToken)
        return token
    }


    async refresh(refreshToken) {

        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }


        const userData = TokenService.validationRefresh(refreshToken);


        const tokenFromDb = await TokenService.find(refreshToken);


        if (!userData || !tokenFromDb) {
            // throw ApiError.UnauthorizedError();
        }


        const user = await model.Users.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = TokenService.generateAccessAndRefreshTokens({ ...userDto });

        await TokenService.save(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }



}


module.exports = new UserService();