const { deleteMyCardById } = require("../../Mongoose/cardsOperation");

/** @type {import("express").RequestHandler} */
async function deleteMyCardByIdHandle(req, res) {
    const cardId = req.query.cardid;
    if (!cardId) return res.status(400).json('Please enter card Id');
    const resultFromDb = await deleteMyCardById(req.userId, cardId)
    if (resultFromDb == null) return res.status(404).json('We did not find a card that matches this customer');
    return res.json({
        Message: "Card removed successfully",
        "Card Id": resultFromDb._id,
        "Business Name": resultFromDb.businessName
    })
}

module.exports = deleteMyCardByIdHandle;