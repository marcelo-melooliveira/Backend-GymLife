const express = require('express');
const routes = express.Router();

const paymentsController = require('../controllers/paymentsController');

routes.get('/checkout/:id/:email/:description/:amount', paymentsController.checkout)

routes.get('/success', (req, res) => {
    console.log('Deu sucesso');
    res.send("ok");
})

routes.get('/pending', (req, res) => {
    console.log('Deu pendencia');
    res.send("ok");
})

routes.get('/failure', (req, res) => {
    console.log('Deu erro');
    res.send("ok");
})

module.exports = routes;