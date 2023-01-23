const cardModel = require("./cardModel")

async function createNewCard(cardDetails, userId) {
    cardDetails.userId = userId;
    try {
        const resultFromDb = await new cardModel(cardDetails).save()
        return resultFromDb;
    }
    catch {
        return null;
    }
}

async function getAllMyCards(userId) {
    try {
        const resultFromDb = await cardModel.find({
            userId: userId
        }).select('-__v -userId')
        return resultFromDb;
    }
    catch {
        return null;
    }
}

async function getAllCards() {
    try {
        const resultFromDb = await cardModel.find()
        return resultFromDb;
    }
    catch {
        return null;
    }
}

async function deleteMyCardById(userId, cardId) {
    try {
        const resultFromDb = await cardModel.findOneAndRemove({
            _id: cardId,
            userId: userId
        })
        return resultFromDb;
    }
    catch {
        return null;
    }
}

async function updateMyCardById(userId, cardId, newDetails) {
    const filter = {
        userId: userId,
        _id: cardId
    }
    try {
        const resultFromDb = await cardModel.findOneAndUpdate(filter, newDetails, { returnOriginal: false }).select("-__v");
        return resultFromDb;
    }
    catch {
        return null;
    }
}

module.exports = { createNewCard, getAllMyCards, getAllCards, deleteMyCardById, updateMyCardById }