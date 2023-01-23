const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    fullName: String,
    email: {
        unique: true,
        type: String
    },
    password: String,
    isBusinessAccount: Boolean,
    createDate: {
        type: Date,
        default: Date.now
    }
});

const customerModel = mongoose.model('customer', mongooseSchema);

module.exports = customerModel;

