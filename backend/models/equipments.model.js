const { Schema, model } = require('mongoose');


const equipmentsSchema = new Schema({
    id_for_scan: {
        type: String,
    },
    title: {
        type: String,
    },
    critical_status: {
        type: String,
    },
    domen: {
        type: String,
    },
    operation_system: {
        type: String,
    },
    virtual_machine: {
        type: String,
    },
    type_of_endpoint: {
        type: String,
    },
    status_working: {
        type: String,
    },
    owner_proccess: {
        type: String,
    },
    security_administrator: {
        type: String,
    },
    security_auditor: {
        type: String,
    },
    control_manager_compliance: {
        type: String,
    },
    tags: {
        type: String,
    },
    location: {
        type: String,
    },
    placement: {
        type: String,
    },
    organisation: {
        type: String,
    },
    comments: {
        type: String,
    },
}, {
    timestamps: true
});


const Equipments = model('Equipments', equipmentsSchema)
//const Company = mongoose.model('Company', companySchema, 'company')

module.exports = Equipments