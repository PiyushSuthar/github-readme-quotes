const fetchQuotes = require('../src/fetcher/fetchQuotes');
const renderSVG = require('../src/renderer/renderSVG');

module.exports = async (req, res) => {
  // Get the queries.
  const { type, theme, myquote } = req.query;

  // Get the quotes.
  let data;
  if (myquote) {
    data = {
      quote: myquote,
      author: 'Me',
    };
  } else {
    data = await fetchQuotes();
  }

  // Send the quote image response.
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=600`);
  res.send(renderSVG(data, type, theme));
};
