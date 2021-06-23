const getAuthorsByName = (authors, name) => {
    return authors.filter( author => author.name === name)
}

module.exports = { getAuthorsByName }