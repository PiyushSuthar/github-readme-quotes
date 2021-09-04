const axios = require('axios').default

// The API is currently down, see issue: https://github.com/skolakoda/programming-quotes-api/issues/37
// async function fetchQuotes() {
//     const response = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/')
//     const data = response.data
//     return parseData(data)
// }

// Using JSON directly from GitHub Repo.
async function fetchQuotes() {
    const response = await axios.get('https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json')
    const data = response.data
    //     Randomly Selecting Quote from Array
    return checkLength(data)
}

async function checkLength(data) {
    let quote = parseData(data[Math.floor(Math.random() * (data.length + 1))])

    return quote.quote.length > 150 ? quote : checkLength(data)
}

const parseData = (data) => {
    return {
        quote: data.en,
        author: data.author
    }
}

module.exports = fetchQuotes
