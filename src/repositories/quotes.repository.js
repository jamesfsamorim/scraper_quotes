const {NUMBER_OF_QUOTE_PAGES} = require("../dictionaries/quotes.constant");
const api = require("../services/api");

class QuoteRepository {
    async getAllQuotes() {
        let quotes = []

        for (let page=1; page <= NUMBER_OF_QUOTE_PAGES; page++) {
            const quote = await this.getQuotesByPage(page)
            if (quote !== null) {
                quotes.push(quote)
            }
        }

        return quotes
    }

    async getQuotesByPage(page) {
        const response = await api.get(`/page/${page}`)
        const {status, data} = response

        if (status !== 200) {
            return null
        }

        return data
    }
}

module.exports = QuoteRepository