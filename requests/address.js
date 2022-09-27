const config = require('../config')
module.exports = {
    AccessRequest: {
        AccessLicenseNumber: config.access_key,
        UserId: config.username,
        Password: config.password
    },
    AddressValidationRequest: {
        Request: {
            TransactionReference: {
                CustomerContext: '',
            },
            RequestAction: 'AV',
        },
        Address: {
            City: 'Lagos',
            StateProviceCode: 'AB'
        }
    }
}