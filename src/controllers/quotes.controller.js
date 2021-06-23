const {getQuotesByAuthor, getQuotesByTag} = require("../helpers/quotes.filter");
const QuoteScraper = require("../scrapers/quotes.scraper")
const QuoteRepository = require("../repositories/quotes.repository")

class QuoteController {
    constructor() {
        this.scrapper = new QuoteScraper()
        this.repository = new QuoteRepository()
    }

    async getQuotes(req, res) {
        const {author, tag} = req.query
        const htmlPages = await this.repository.getAllQuotes()
        const quotes = this.scrapper.getProcessQuotes(htmlPages)

        if (typeof author !== "undefined") {
            res.json({data: getQuotesByAuthor(quotes, author)})
        }

        if (typeof tag !== "undefined") {
            res.json({data: getQuotesByTag(quotes, tag)})
        }

        res.json({data: quotes})
    }
}

module.exports = new QuoteController()
