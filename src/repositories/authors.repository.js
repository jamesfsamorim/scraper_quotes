const {AUTHORS} = require("../dictionaries/authors.constant");
const api = require("../services/api");

class AuthorRepository {
    async getAllAuthors() {
        let authors = []

        for (const author of AUTHORS) {
            const authorBio = await this.getAuthorBioByName(author)
            if (authorBio !== null) {
                authors.push(authorBio)
            }
        }

        return authors
    }

    async getAuthorBioByName(authorName) {
        const response = await api.get(`/author/${authorName}`)
        const {status, data} = response

        if (status !== 200) {
            return null
        }

        return data
    }
}

module.exports = AuthorRepository