const authorController = require('../controllers/authors.controller');

module.exports = function(app){
    app.get('/authors', (req, res) => authorController.getAuthors(req, res));
}