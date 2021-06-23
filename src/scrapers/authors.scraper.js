const cheerio = require("cheerio")
const Author = require("./../models/author")

class AuthorScraper {
    getProcessAuthors(htmlPages) {
        let authors = []

        htmlPages.forEach( html => {
            authors = authors.concat(this.getProcessAuthorsByHtml(html))
        })

        return authors
    }

    getProcessAuthorsByHtml(html) {
        const htmlObject = cheerio.load(html)

        const name = htmlObject('h3.author-title').text()
        const born = htmlObject('span.author-born-date').text()
        const description = htmlObject('div.author-description').text().trim()

        return new Author(name, born, description)
    }
}

module.exports = AuthorScraper;