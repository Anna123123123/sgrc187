const { Schema, model } = require('mongoose');
const os = require('os');


const tokenSchema = new Schema({
    // @from db Users
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    // @::1/128
    ip: {
        type: String,

    },
    // @ Windows 10.h10
    os: {
        type: String,
        default: os.type()
    },
    // @ Safari 11.1
    browser: {
        type: String
    },
    // @Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15
    user_agent: {
        type: String
    },
    // @ 6d36877d-6a5d-411d-85f7-9d68b37f6761 
    refreshToken: {
        type: String,
        required: true
    },
    expired_at: {
        type: String
    },
    created_at: {
        type: String
    },
    updated_at: {
        type: String
    },

    //Можно хранить fingerprint браузера, IP и т.д.
})

const Token = model('Token', tokenSchema)

module.exports = Token;