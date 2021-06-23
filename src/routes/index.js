module.exports = function(app){
    require('./authors.route')(app);
    require('./quotes.route')(app);
}