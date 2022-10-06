import { poppinsFontSVG } from '../constants';
import { Theme } from '../theme/awesome-card';

interface Props {
  quote: string;
  author: string;
  color: Theme;
}

export const renderHorizontal = ({ quote, author, color }: Props) => {
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
                  background-color: #${color.background};
                  border: 1px solid rgba(0, 0, 0, 0.2);
                  border-radius: 10px;
                }
                .container h3 {
                  font-size: 19px;
                  margin-bottom: 5px;
                  font-weight: 500;
                  font-style: oblique;
                  color: #${color.quote};
                }
                .container h3::before {
                  content: open-quote;
                  font-size: 25px;
                  color: #${color.symbol};
                }
                .container h3::after {
                  content: close-quote;
                  vertical-align: sub;
                  font-size: 25px;
                  color: #${color.symbol};
                }
                .container p {
                  font-style: italic;
                  padding: 5px;
                  text-align: right;
                  color: #${color.author};
                }
            </style>

            <div class="container">
                <h3> ${quote}</h3>
                <p>- ${author}</p>
            </div>
        </div>
    </foreignObject>
  </svg>
`;

  return renderedSVG;
};
