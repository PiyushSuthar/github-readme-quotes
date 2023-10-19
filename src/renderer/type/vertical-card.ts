import { poppinsFontSVG } from '../constants';
import { Theme, themes } from '../theme/awesome-card';

interface Props {
  quote: string;
  author: string;
  color: Theme;
  border: boolean;
}

export const renderVertical = ({ quote, author, color, border }: Props) => {
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
            font-family: Poppins, Arial, Helvetica, sans-serif;
            padding: 15px;
            display:flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            text-align:center;
		  	border: ${border ? "3px solid #"+themes.default.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
            border-radius: 10px;
          }
          .container h3::before {
            content: open-quote;
          }
          .container h3::after {
            content: close-quote;
          }
          .container h3::before, .container h3::after {
            font-size: 50px;
            display:block;
            margin-bottom:-20px;

          }
          .container h3 {
            margin-bottom: 15px;
          }
          .container p {
            font-style: italic;
          }
          
          /* Default light theme */
          .container {
            background-color: #${themes.default.background};
          }
          .container h3 {
            color: #${themes.default.quote};
          }
          .container h3::before, .container h3::after {
            color: #${themes.default.symbol};
          }
          .container p {
            color: #${themes.default.author};
          }
      
          /* Default dark theme - iff dark mode detected in system settings, overriding default light theme */
          @media (prefers-color-scheme: dark) {
            .container {
              background-color: #${themes.defaultDarkModeSupport.background};
			  border: ${border ? "3px solid #"+themes.defaultDarkModeSupport.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
            }
            .container h3 {
              color: #${themes.defaultDarkModeSupport.quote};
            }
            .container h3::before, .container h3::after {
              color: #${themes.defaultDarkModeSupport.symbol};
            }
            .container p {
              color: #${themes.defaultDarkModeSupport.author};
            }
          }
      
          /* Default light/dark mode theme override for any custom theme */
          ${JSON.stringify(color) !== JSON.stringify(themes.default) &&
            JSON.stringify(color) !== JSON.stringify(themes.defaultDarkModeSupport) ?
          ` .container {
              background-color: #${color.background};
			  border: ${border ? "3px solid #"+color.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
            }
            .container h3 {
              color: #${color.quote};
            }
            .container h3::before, .container h3::after {
              color: #${color.symbol};
            }
            .container p {
              color: #${color.author};
            }
          ` : ''}
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
