const { Schema, model } = require('mongoose');


const usersSchema = new Schema({
    // firstname: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    email: {
        type: String,
        trim: true,
        required: [true, 'Введите почту'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Введите пароль'],
        minlength: 8
    },
    // Salt: String,
    // // tags: {
    // //     type: [String]
    // // },
    isActivated: {
        type: Boolean,
        default: false
    },
    activationLink: {
        type: String
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now //new Date()
    // },
    // updatedAt: Date,
    role: [{
        type: Schema.Types.ObjectId, //Schema.ObjectId
        ref: 'Role'
    }]
})

const Users = model('Users', usersSchema)


module.exports = Users;


/**
 * Можно использовать для расчета пароля virtual fields предоставленые средствами mongoose
*/

/*
import { createHmac } from 'crypto';

usersSchema.virtual('password').set(function (password) {
    this._password = password
    this.salt = uuid() //добавить в схему usersSchema salt
    this.hashedPass = encryptedPass(password)
})

    .get(function () {
        return this._password
    })

usersSchema.methods = {
    encryptedPass: function (password) {
        if (!password) {
            throw new Error()
        }
        const secret = 'abcdefg';
        const hashedPass = createHmac('sha256', secret)
            .update('I love cupcakes')
            .digest('hex');
        // try/catch errors...
    }
}
 */