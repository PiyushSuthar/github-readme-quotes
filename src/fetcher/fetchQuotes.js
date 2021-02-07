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
//     Randomly Selecting Quote from Array
    const data = response.data[Math.floor(Math.random() * (json.length + 1))]
    return parseData(data)
}

const parseData = (data) => {
    return {
        quote: data.en,
        author: data.author
    }
}

module.exports = fetchQuotes
