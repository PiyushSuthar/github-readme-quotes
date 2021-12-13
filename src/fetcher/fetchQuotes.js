const axios = require('axios').default

async function fetchQuotes() {
//     const response = await axios.get('https://programmingquotesapi.azurewebsites.net/quotes/random')
    const response = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
    const data = response.data

    let parsedData = parseData(data)

    // check if the quote is less than 220 chars and return
    return parsedData.quote.length < 220 ? parsedData : fetchQuotes()
}

// Using JSON directly from GitHub Repo.
// async function fetchQuotes() {
//     const response = await axios.get('https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json')
//     const data = response.data
//     //     Randomly Selecting Quote from Array
//     return checkLength(data)
// }

// async function checkLength(data) {
//     let quote = parseData(data[Math.floor(Math.random() * (data.length + 1))])

//     return quote.quote.length > 150 ? quote : checkLength(data)
// }

/**
 * 
 * @param {*} data 
 * @returns {{quote:string; author:string;}}
 */
const parseData = (data) => {
    return {
        quote: data.en,
        author: data.author
    }
}

module.exports = fetchQuotes
