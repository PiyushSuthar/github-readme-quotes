import type { VercelRequest, VercelResponse } from '@vercel/node';

import { fetchQuotes } from '../src/fetcher/fetch-quotes';
import { renderSVG } from '../src/renderer/render-svg';

const handler = async (req: VercelRequest, res: VercelResponse) => {
  // Get the queries.
  const { type, theme, myquote, author } = req.query;

  // Get the quotes.
  let data;

  if (myquote && author) {
    data = {
      quote: myquote,
      author: author,
    };
  } else if (myquote) {
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
  res.send(renderSVG(data as any, type as any, theme as any));
};

export default handler;
