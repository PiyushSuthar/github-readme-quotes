import { poppinsFontSVG } from '../constants';
import { getThemeStyles, Theme, themes } from '../theme/awesome-card';

interface Props {
  quote: string;
  author: string;
  color: Theme | null ;
  border: boolean;
}

export const renderVertical = ({ quote, author, color, border }: Props) => {
  const themeStyles = getThemeStyles(color, border); // gets css styling for specific theme
  
  const renderedSVG = `
  <svg width="300" height="300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        ${poppinsFontSVG}
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .container {
            width: 300px;
            height: 300px;
            font-family: Poppins, Arial, Helvetica, sans-serif;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius: 10px;
          }
          .container h3::before {
            content: open-quote;
            font-size: 50px;
            display: block;
            margin-bottom: -20px;
          }
          .container h3::after {
            content: close-quote;
            font-size: 50px;
            display: block;
            margin-bottom: -20px;
          }
          .container h3 {
            margin-bottom: 15px;
          }
          .container p {
            font-style: italic;
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
