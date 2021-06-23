const cheerio = require("cheerio")
const Quote = require("./../models/quote")

class QuoteScraper {
    getProcessQuotes(htmlPages) {
        let quotes = []

        htmlPages.forEach( html => {
            quotes = quotes.concat(this.getProcessQuotesByHtml(html))
        })

        return quotes
    }

    getProcessQuotesByHtml(html) {
        const htmlObject = cheerio.load(html)
        const quoteDiv = htmlObject("div.quote")
        let quotes = []

        quoteDiv.each( (index,quote) => {
            quotes.push(this.getQuoteByDiv(quote))
        })

        return quotes
    }

    getQuoteByDiv(quoteDiv) {
        quoteDiv = cheerio.load(quoteDiv)
        const author = quoteDiv('small.author').text().trim()
        const text = quoteDiv('span.text').text().trim()
        const tags = quoteDiv('a.tag').toArray().map( tag => cheerio.load(tag).text())

        return new Quote(author, text, tags)
    }
}

module.exports = QuoteScraper;