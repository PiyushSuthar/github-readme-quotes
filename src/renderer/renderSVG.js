const renderHorizontal = require('./type/horizontalCard');
const renderVertical = require('./type/verticalCard');

const renderSVG = (data,type) => {
    const { quote, author } = data
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