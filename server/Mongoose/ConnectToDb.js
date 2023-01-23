const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://admin-eden:edencardapp@businesscardapp.qpyyndk.mongodb.net/businesscardapp?retryWrites=true&w=majority')
    .then(x => console.log('Connected To MongoDb'))
    .catch(err => console.error(err))