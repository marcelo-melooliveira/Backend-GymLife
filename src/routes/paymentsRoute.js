const express = require('express');
const routes = express.Router();

const paymentsController = require('../controllers/paymentsController');
const BuyController = require('../controllers/buyController');

routes.get('/checkout/:id/:email/:description/:amount', paymentsController.checkout)

routes.get('/success/:idUser/:messege', BuyController.sucess);

routes.get('/pending/:idUser/:messege', BuyController.pending);

routes.get('/failure/:idUser/:messege', BuyController.failure);

module.exports = routes;