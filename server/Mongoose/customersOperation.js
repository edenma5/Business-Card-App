const customerModel = require("./customerModel");
const bcryptjs = require('bcryptjs');

async function createNewCustomer(newCustomerDetails) {
    try {
        let sameEmail = await customerModel.findOne({ email: newCustomerDetails.email }).count().exec();
        if (sameEmail) return sameEmail = 'There is a customer with the same email';
        newCustomerDetails.password = bcryptjs.hashSync(newCustomerDetails.password)
        const resultFromDb = await new customerModel(newCustomerDetails).save()
        return resultFromDb;

    }
    catch {
        return null;
    }
}

async function signInCustomer(userDetails) {
    try {
        const findCurrentUser = await customerModel.findOne({
            email: userDetails.email
        })
        const verifyPassword = bcryptjs.compareSync(userDetails.password, findCurrentUser.password)
        if (verifyPassword)
            return findCurrentUser;
    }
    catch {
        return null;
    }
}

async function getLoggedInCustomer(userId) {
    try {
        const resultFromDb = await customerModel.findOne({
            userId: userId
        }).select('-__v -password');
        return resultFromDb;
    }
    catch {
        return null;
    }
}

module.exports = { createNewCustomer, signInCustomer, getLoggedInCustomer }