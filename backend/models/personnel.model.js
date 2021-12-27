const { Schema, model } = require('mongoose');

const personnelSchema = new Schema({
    companie: [{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }],
    id: {
        type: String,
        // required: true
    },
    realname: {
        type: String,
        //required: true
    },
    username: {
        type: String,
        //required: true
    },
    position: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        //required: true
    },
    domain: {
        type: String,
        // required: true
    },
    related_hardware: {
        type: Number,
        default: 0
    },
    privilege_level: {
        type: String,
        // required: true
    },
    is_security_administrator: {
        // type: Boolean,
        // required: true
        type: String
    },
    number_of_incidents: {
        type: Number,
        default: 0
    },
    addition_info: {
        type: String
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const Personnel = model('Personnel', personnelSchema)
// const Personnel = mongoose.model('Personnel', personnelSchema, 'personnel')
module.exports = Personnel;