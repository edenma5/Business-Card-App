const { getAllMyCards } = require("../../Mongoose/cardsOperation");

/** @type {import("express").RequestHandler} */
async function getAllMyCardsHandle(req, res) {
    const resultFromDb = await getAllMyCards(req.userId);
    if (resultFromDb == null) return res.status(500).json([{ message: 'No cards were found belonging to this customer' }]);
    return res.json(resultFromDb);
}

module.exports = getAllMyCardsHandle;