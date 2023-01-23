const joi = require('joi');

const schema = joi.object({
    fullName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(20).required(),
    isBusinessAccount: joi.boolean().required()
})

function newCustomersJoiValidate(newCustomerFromUser) {
    return schema.validate(newCustomerFromUser)
}

module.exports = newCustomersJoiValidate;