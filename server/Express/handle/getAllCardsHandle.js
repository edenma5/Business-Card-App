const { getAllCards } = require("../../Mongoose/cardsOperation");

/** @type {import("express").RequestHandler} */
async function getAllCardsHandle(req, res) {
    const resultFromDb = await getAllCards();
    if (resultFromDb == null) return res.status(400).json('No cards was found');
    return res.json(resultFromDb);
}

module.exports = getAllCardsHandle;