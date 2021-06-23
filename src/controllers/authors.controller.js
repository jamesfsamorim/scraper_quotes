const {getAuthorsByName} = require("../helpers/authors.filter");
const AuthorRepository = require("../repositories/authors.repository")
const AuthorScraper = require("../scrapers/authors.scraper")

class AuthorController {
    constructor() {
        this.scrapper = new AuthorScraper()
        this.repository = new AuthorRepository()
    }

    async getAuthors(req, res) {
        const {name} = req.query
        const htmlPages = await this.repository.getAllAuthors()
        const authors = this.scrapper.getProcessAuthors(htmlPages)

        if (typeof name !== "undefined") {
            res.json({data: getAuthorsByName(authors, name)})
        }

        res.json({data: authors})
    }
}

module.exports = new AuthorController()