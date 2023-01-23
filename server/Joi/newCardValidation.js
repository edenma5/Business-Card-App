const joi = require('joi');

const schema = joi.object({
    businessName: joi.string().min(5).max(30).required(),
    businessDescription: joi.string().min(10).max(100).required(),
    businessAddress: joi.string().min(10).max(40).required(),
    businessPhoneNumber: joi.string().min(10).max(15).required(),
    businessImageUrl: joi.string().max(300).required()
})

function cardValidate(cardDetails) {
    return schema.validate(cardDetails)
}

module.exports = cardValidate;