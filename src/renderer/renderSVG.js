const renderHorizontal = require('./type/horizontalCard');
const renderVertical = require('./type/verticalCard');
const renderTheme = require('./theme/awesomeCard');

const renderSVG = (data,type,theme) => {
    const { quote, author } = data
    switch (theme) {
      case "dark":
        color = renderTheme("dark")
      case "light":
        color = renderTheme("light")
      default:
        color = renderTheme("light")
    }
    console.log(color)
    switch (type) {
      case "vertical":
        return renderVertical({quote,author})
      case "horizontal":
        return renderHorizontal({quote,author})
      default:
        return renderVertical({quote,author})
    }
}

module.exports = renderSVG
