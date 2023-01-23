const newCustomersJoiValidate = require("../../Joi/newCustomersValidation");
const { createNewCustomer } = require("../../Mongoose/customersOperation");

/** @type {import("express").RequestHandler} */
async function createNewCustomerHandle(req, res) {
    const resultJoiValidate = newCustomersJoiValidate(req.body);
    if (resultJoiValidate.error)
        return res.status(400).json(resultJoiValidate.error.details[0].message);
    const resultFromDb = await createNewCustomer(req.body)
    if (resultFromDb == 'There is a customer with the same email') {
        return res.status(401).json('There is a user with the same email')
    }
    if (resultFromDb == null) return res.status(500).json('Unexpected error')
    return res.json('You have successfully registered!')
}

module.exports = createNewCustomerHandle;