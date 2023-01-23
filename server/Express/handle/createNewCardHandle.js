const cardValidate = require("../../Joi/newCardValidation");
const { createNewCard } = require("../../Mongoose/cardsOperation");


/** @type {import("express").RequestHandler} */
async function createNewCardHandle(req, res) {
    if (!req.isBusinessAccount) return res.status(400).json([{ message: 'Creating a business card for business users only!' }]);

    const joiResult = cardValidate(req.body);
    if (joiResult.error) return res.status(400).json(joiResult.error.details[0].message)
    const resultFromDb = await createNewCard(req.body, req.userId);
    if (resultFromDb == null) return res.status(500).json('Unexpected error');
    return res.json([{
        "message": "The card was created successfully",
        "cardId": resultFromDb._id,
        "businessName": resultFromDb.businessName,
        'createDate': resultFromDb.createDate
    }])
}

module.exports = createNewCardHandle;