const { Schema, model } = require('mongoose');


const roleSchema = new Schema({
    name: {
        type: String,
        unique: true,
        default: 'user'
    }
})

const Role = model('Role', roleSchema)


module.exports = Role;