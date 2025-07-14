import type { VercelRequest, VercelResponse } from '@vercel/node';

import { fetchQuotes } from '../src/fetcher/fetch-quotes';
import { renderSVG } from '../src/renderer/render-svg';
import { themes } from '../src/renderer/theme/awesome-card';

import type { CardType } from '../src/renderer/render-svg';

interface ResponseQuery {
  type: CardType;
  theme: keyof typeof themes;
  quote: string;
  author: string;
  border: boolean;
  // Custom color parameters
  quoteColor?: string;
  authorColor?: string;
  backgroundColor?: string;
  symbolColor?: string;
}

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const { 
    type, 
    theme, 
    quote, 
    author, 
    border,
    quoteColor,
    authorColor,
    backgroundColor,
    symbolColor
  } = req.query as unknown as ResponseQuery;

  let data;

  if (quote && author) {
    data = {
      quote: quote,
      author: author
    };
  } else if (quote) {
    data = {
      quote: quote,
      author: 'Me'
    };
  } else {
    data = await fetchQuotes();
  }

  // Custom colors object
  const customColors = {
    quote: quoteColor,
    author: authorColor,
    background: backgroundColor,
    symbol: symbolColor
  };

  // Send the quote image response.
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=600`);
  res.send(renderSVG(data, type, theme, border, customColors));
};

export default handler;
