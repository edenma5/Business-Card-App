const jsonwebtoken = require('jsonwebtoken');

/** @type {import("express").RequestHandler} */
async function authenticateCustomers(req, res, next) {
    const userToken = req.headers.token;

    if (!userToken || userToken === 'undefined') return res.status(401).json([{ message: 'You must sign in first' }]);

    try {
        const resultOfVerifyToken = jsonwebtoken.verify(userToken, 'myToken');
        req.userId = resultOfVerifyToken.userId;
        req.isBusinessAccount = resultOfVerifyToken.isBusinessAccount;
        req.fullName = resultOfVerifyToken.fullName
        console.log(resultOfVerifyToken);
        next()
    }
    catch (error) {
        if (error.name === 'TokenExpiredError') return res.status(400).json([{ message: 'Token Expired' }]);
        else return res.status(401).json([{ message: error.name }]);
    }
}

module.exports = authenticateCustomers;