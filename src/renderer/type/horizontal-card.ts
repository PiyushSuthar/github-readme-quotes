import { poppinsFontSVG } from '../constants';
import { getThemeStyles, Theme } from '../theme/awesome-card';

interface Props {
  quote: string;
  author: string;
  color: Theme | null;
  border: boolean;
}

export const renderHorizontal = ({ quote, author, color, border }: Props) => {
  const themeStyles = getThemeStyles(color, border); // gets css styling for specific theme

  const renderedSVG = `
  <svg width="600" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        ${poppinsFontSVG}
        <style>
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          .container {
            font-family: Poppins, Arial, Helvetica, sans-serif;
            padding: 20px;
            width: 600px;
            border-radius: 10px;
          }
          .container h3 {
            font-size: 19px;
            margin-bottom: 5px;
            font-weight: 500;
            font-style: oblique;
          }
          .container h3::before {
            content: open-quote;
            font-size: 25px;
          }
          .container h3::after {
            content: close-quote;
            vertical-align: sub;
            font-size: 25px;
          }
          .container p {
            font-style: italic;
            padding: 5px;
            text-align: right;
          }
          ${themeStyles}
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
