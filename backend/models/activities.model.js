const { Schema, model } = require('mongoose');


const activitiesSchema = new Schema({
    id: {
        type: String,
    },
    category: {
        type: String,
    },
    sub_category: {
        type: String
    },
    title: {
        type: String,
    },

    owner_proccess: {
        type: String,
    }, //[] должен быть
    security_administrator: {
        type: String,
    },
    security_auditor: {
        type: String,
    },
    control_manager_compliance: {
        type: String,
    },
    description: {
        type: String,
    },
    social_mark: {
        type: String,
    },
    politic_mark: {
        type: String,
    },
    economic_mark: {
        type: String,
    },
    eco_mark: {
        type: String,
    },
    military_mark: {
        type: String,
    },
    justification: {
        type: String,
    },
    critical_status: {
        type: String,
    }
}, {
    timestamps: true
});


const Activities = model('Activities', activitiesSchema)
//const Company = mongoose.model('Company', companySchema, 'company')

module.exports = Activities