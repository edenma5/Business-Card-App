const joi = require('joi');

const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required()
})

function signInValidate(userDetails) {
    return schema.validate(userDetails)
}

module.exports = signInValidate;