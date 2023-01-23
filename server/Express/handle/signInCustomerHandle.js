const signInValidate = require("../../Joi/signInValidate");
const { signInCustomer } = require("../../Mongoose/customersOperation");
const jsonwebtoken = require('jsonwebtoken');


/** @type {import("express").RequestHandler} */
async function signInCustomerHandle(req, res) {
    const joiResult = signInValidate(req.body)
    if (joiResult.error) return res.status(400).json(joiResult.error.details[0].message);

    const resultFromDb = await signInCustomer(req.body);
    if (resultFromDb == null) return res.status(500).json('The user does not exist in the system');
    // אחרי הזדהות במערכת ומציאת החשבון- מייצר טוקן ייחודי למשתמש למהלך השימוש במערכת
    const token = jsonwebtoken.sign({
        userId: resultFromDb._id,
        isBusinessAccount: resultFromDb.isBusinessAccount,
        fullName: resultFromDb.fullName
    }, 'myToken', { expiresIn: '12h' });

    return res.json({
        fullName: resultFromDb.fullName,
        isBusinessAccount: resultFromDb.isBusinessAccount,
        token: token
    });
}

module.exports = signInCustomerHandle;
