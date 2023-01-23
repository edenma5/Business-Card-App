const { getLoggedInCustomer } = require("../../Mongoose/customersOperation");

/** @type {import("express").RequestHandler} */
async function getLoggedInCustomerHandle(req, res) {
    const userId = req.userId;
    const resultFromDb = await getLoggedInCustomer(userId);
    if (resultFromDb == null) return res.status(400).json('Could not access data in database');
    return res.json(resultFromDb);
}

module.exports = getLoggedInCustomerHandle;