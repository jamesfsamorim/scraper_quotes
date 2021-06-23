const quoteController = require('../controllers/quotes.controller.js');

module.exports = function(app){
    app.get('/quotes', (req, res) => quoteController.getQuotes(req, res));
}