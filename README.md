<h1 align="center">Scraper Quotes API</h1>

<p align="center">A simple project that has the purpose be an API of famous quotes and authors</p>

Content Table
=================
<!--ts-->
* [Install](#install)
* [Usage](#usage)
    * [Request Routes](#request-routes)
* [Tests](#tests)
* [Tecnologies](#tech)
<!--te-->

<h3 id="install">📦 Install (server) </h3>

```bash

# Clone this repository
$ git clone <https://github.com/jamesfsamorim/scraper_quotes.git>

# Access throject folder in terminal/cmd
$ cd scraper_quotes

# Install the dependencies
$ npm install or yarn install

# Run the script
$ npm start / yarn start

# The server will running in port:3000 - access <http://localhost:3000>
```

<h3 id="how-use">🔨 How to use </h3>

<h4 id="request-routes">Request Routes</h4>

These are some routes that can be access by browser or services as [postman](https://www.postman.com/) or [insomnia](https://insomnia.rest/download)

##### Quotes routes

| Method | Route | Description |
| --- | --- | --- |
| **GET** | /quotes | get all quotes 
| **GET** | /quotes?author={author name} | get all quotes by author name
| **GET** | /quotes?tag={tag name} | get all quotes by tag name

##### Authors routes

| Method | Route | Description |
| --- | --- | --- |
| **GET** | /authors | get all authors
| **GET** | /authors?name={author name} | get all authors by author name

<h3 id="tests">⚒️ Tests </h3> 

Coming soon

<h3 id="tech">🖥️ Technologies </h3>

* [Express](https://expressjs.com/)
* [Cheerio](https://www.npmjs.com/package/cheerio)
* [Axios](https://www.npmjs.com/package/axios)
* [Node](https://nodejs.org/en/)

developed by James Amorim.