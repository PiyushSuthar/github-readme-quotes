// Themes.
const { renderTheme } = require('./theme/awesomeCard');

// Layouts.
const renderHorizontal = require('./type/horizontalCard');
const renderVertical = require('./type/verticalCard');

const renderSVG = (data, type, theme) => {
  const { quote, author } = data;

  // If the theme exists in the list of themes, render the specific theme. Else, render the default theme.
  const color = renderTheme(theme);

  switch (type) {
    case 'vertical':
      return renderVertical({ quote, author, color });
    case 'horizontal':
      return renderHorizontal({ quote, author, color });
    default:
      return renderVertical({ quote, author, color });
  }
};

module.exports = renderSVG;
