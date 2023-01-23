const cardModel = require("../../Mongoose/cardModel");
const { updateMyCardById } = require("../../Mongoose/cardsOperation");

/** @type {import("express").RequestHandler} */
async function updateMyCardByIdHandle(req, res) {
    const cardId = req.query.cardid;
    const cardDetailsUpdate = req.body;
    if (!cardId) return res.status(400).json('Please enter card Id')
    const resultFromDb = await updateMyCardById(req.userId, cardId, cardDetailsUpdate);
    if (resultFromDb == null) return res.status(404).json('We did not find a card that matches this customer');
    return res.json([{ message: 'The card has been successfully updated!' }]);
}


module.exports = updateMyCardByIdHandle;