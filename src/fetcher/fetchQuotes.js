const axios = require('axios').default;

async function fetchQuotes() {
  const response = await axios.get(
    'https://programming-quotes-api.herokuapp.com/Quotes/random'
  );
  const data = response.data;

  // Parse the data returned from the API.
  let parsedData = parseData(data);

  // Check if the quote is less than 220 chars, if so, return the quote.
  return parsedData.quote.length < 220 ? parsedData : fetchQuotes();
}

/**
 *
 * @param {*} data
 * @returns {{quote:string; author:string;}}
 */
const parseData = data => {
  return {
    quote: data.en,
    author: data.author
  };
};

module.exports = fetchQuotes;
