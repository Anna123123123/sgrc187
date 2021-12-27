const { Schema, model } = require('mongoose');

const companySchema = new Schema({
    title: {
        type: String,
        maxlenght: 150
    },
    field_activity: {
        type: String
    }
}, {
    timestamps: true
});


const Company = model('Company', companySchema)
//const Company = mongoose.model('Company', companySchema, 'company')

module.exports = Company