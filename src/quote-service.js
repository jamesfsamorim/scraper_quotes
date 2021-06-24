const express = require("express");

const createService = () => {
    const app = express();
    app.use(express.json())
    require('./routes')(app)

    return app;
};

module.exports = { createService };