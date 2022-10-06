import { poppinsFontSVG } from '../constants';

import type { Theme } from '../theme/awesome-card';

interface Props {
  quote: string;
  author: string;
  color: Theme;
}

export const renderVertical = ({ quote, author, color }: Props) => {
  const renderedSVG = `
  <svg width="300" height="300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        ${poppinsFontSVG}

        <style>
          * {
            margin:0;
            padding:0;
            box-sizing:border-box;
          }
          .container {
            width: 300px;
            height: 300px;
            background-color: #${color.background};
            font-family: Poppins, Arial, Helvetica, sans-serif;
            padding: 15px;
            display:flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            text-align:center;
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 10px;
          }
          .container h3::before {
            content: open-quote;
            color: #${color.symbol};
          }
          .container h3::after {
            content: close-quote;
            color: #${color.symbol};
          }
          .container h3::before, .container h3::after {
            font-size: 50px;
            display:block;
            margin-bottom:-20px;

          }
          .container h3 {
            margin-bottom: 15px;
            color: #${color.quote};
          }
          .container p {
            font-style: italic;
            color: #${color.author};
          }
        </style>
        <div class="container">
          <h3>${quote}</h3>
          <p>- ${author}</p>
        </div>
      </div>
    </foreignObject>
  </svg>
`;

  return renderedSVG;
};
