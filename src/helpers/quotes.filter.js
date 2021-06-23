const getQuotesByAuthor = (quotes, author) => {
    return quotes.filter( quote => quote.author === author)
}

const getQuotesByTag = (quotes, tag) => {
    return quotes.filter(quote => quote.tags.includes(tag))
}

module.exports = { getQuotesByAuthor, getQuotesByTag }