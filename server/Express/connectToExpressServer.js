const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();
server.use(express.json());
server.use(cors());


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3001;
}
server.listen(port, console.log('Server running on port: ', port));


//middle ware
const authenticateCustomers = require('./middleWare/authenticateCustomers');

//customers
const createNewCustomerHandle = require('./handle/createNewCustomerHandle');
const getLoggedInCustomerHandle = require('./handle/getLoggedInCustomerHandle');
const signInCustomerHandle = require('./handle/signInCustomerHandle');

//cards
const createNewCardHandle = require('./handle/createNewCardHandle');
const getAllMyCardsHandle = require('./handle/getAllMyCardsHandle');
const getAllCardsHandle = require('./handle/getAllCardsHandle');
const deleteMyCardByIdHandle = require('./handle/deleteMyCardByIdHandle');
const updateMyCardByIdHandle = require('./handle/updateMyCardByIdHandle');

//customers
server.post('/customers/new', createNewCustomerHandle)
server.post('/customers/signin', signInCustomerHandle)
server.get('/customers/getloggedincustomer', authenticateCustomers, getLoggedInCustomerHandle)

//cards
server.post('/cards/createforbusinessuser', authenticateCustomers, createNewCardHandle)
server.get('/cards/getallmycards', authenticateCustomers, getAllMyCardsHandle)
server.get('/cards/getallcards', authenticateCustomers, getAllCardsHandle)
server.delete('/cards/deletemycardbyid', authenticateCustomers, deleteMyCardByIdHandle)
server.put('/cards/updatemycardbyid', authenticateCustomers, updateMyCardByIdHandle)
