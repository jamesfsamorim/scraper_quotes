const axios = require("axios");

const api = axios.create({
    baseURL: "http://quotes.toscrape.com",
});

module.exports = api;