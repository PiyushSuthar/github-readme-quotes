import axios from 'axios';

interface ParseDataParams {
  text: string;
  author: string;
}

interface ParseDataReturn {
  quote: string;
  author: string;
}

const parseData = (data: ParseDataParams): ParseDataReturn => {
  return {
    quote: data.text,
    author: data.author
  };
};

// Recursively find a random quote of correct length.
const randomQuote = (data: ParseDataParams[]): ParseDataParams => {
  // Filter out invalid entries.
  const validQuotes = data.filter(quote => quote && typeof quote.text === 'string');

  // If no valid quotes exist, throw an error.
  if (validQuotes.length === 0) {
    throw new Error('No valid quotes found in the data.');
  }

  // Get a random quote.
  let randQuote = validQuotes[Math.floor(Math.random() * validQuotes.length)];

  // Check length and recurse if necessary.
  return randQuote.text.length < 220 ? randQuote : randomQuote(validQuotes);
};

export async function fetchQuotes(): Promise<ParseDataReturn> {
  const response = await axios.get(
    'https://github.com/mudroljub/programming-quotes-api/raw/master/data/quotes.json'
  );

  const data: ParseDataParams[] = response.data;

  // Validate the fetched data.
  if (!Array.isArray(data)) {
    throw new Error('Fetched data is not an array.');
  }

  // Get a random quote.
  let randQuote = randomQuote(data);

  // Parse the data and return it.
  return parseData(randQuote);
}
