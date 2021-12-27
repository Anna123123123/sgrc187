const { Schema, model } = require('mongoose');

const assetsSchema = new Schema({
    id: {
        type: String
    },
    title: {
        type: String
    },
    status_critical: {
        type: String
    },
    location: {
        type: String
    },
    owner_asset: {
        type: String
    },
    sec_administrator: {
        type: String
    },
    sec_auditor: {
        type: String
    },
    manager_compliance: {
        type: String
    },
    description: {
        type: String
    },
    is_kii: {
        type: String
    },
    type: {
        type: String
    },
    adress: {
        type: String
    },
    kpp_object: {
        type: String
    },
    sphere_activity: {
        type: String
    },
    purpose_obj: {
        type: String
    },
    architecture: {
        type: String
    },
    category_critical: {
        type: String
    },
    date: {
        type: String
    }
})

const itAssets = model('itAssets', assetsSchema)

module.exports = itAssets;