const mongoose = require('mongoose');

const newCardSchema = mongoose.Schema({
    businessName: String,
    businessDescription: String,
    businessAddress: String,
    businessPhoneNumber: String,
    businessImageUrl: String,
    userId: String,
    createDate: {
        type: Date,
        default: Date.now
    }
})

const cardModel = mongoose.model('card', newCardSchema);

module.exports = cardModel;