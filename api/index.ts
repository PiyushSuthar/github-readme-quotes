import type { VercelRequest, VercelResponse } from '@vercel/node';

import { fetchQuotes } from '../src/fetcher/fetch-quotes';
import { renderSVG } from '../src/renderer/render-svg';
import { themes } from '../src/renderer/theme/awesome-card';

import type { CardType } from '../src/renderer/render-svg';

interface ResponseQuery {
  type: CardType;
  theme: keyof typeof themes;
  myquote: string;
  author: string;
}

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const { type, theme, myquote, author } = req.query as unknown as ResponseQuery;

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
  res.send(renderSVG(data, type, theme));
};

export default handler;
