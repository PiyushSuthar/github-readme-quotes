const axios = require('axios').default

async function fetchQuotes() {
    const response = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/')
    const data = response.data
    return parseData(data)
}

const parseData = (data) => {
    return {
        quote: data.en,
        author: data.author
    }
}

module.exports = fetchQuotes