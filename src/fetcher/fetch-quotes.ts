import axios from 'axios';

interface ParseDataParams {
  en: string;
  author: string;
}

interface ParseDataReturn {
  quote: string;
  author: string;
}

const parseData = (data: ParseDataParams) => {
  return {
    quote: data.en,
    author: data.author
  };
};

export async function fetchQuotes(): Promise<ParseDataReturn> {
  // NOTE: Heroku has no more free tier. Time for new API?
  const response = await axios.get(
    'https://programming-quotes-api.herokuapp.com/Quotes/random'
  );
  const data = response.data;

  // Parse the data returned from the API.
  let parsedData = parseData(data);

  // Check if the quote is less than 220 chars, if so, return the quote
  return parsedData.quote.length < 220 ? parsedData : fetchQuotes();
}
