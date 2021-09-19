const renderTheme = (theme) => {
    if (theme == "dark"){
      const renderedTheme = {
        text: "white",
        background: "black"
      }
    }else if (theme == "light"){
      const renderedTheme = {
        text: "black",
        background: "white"
      }
    }
    return renderedTheme
}
module.exports = renderTheme
