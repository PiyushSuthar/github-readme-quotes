const renderTheme = (theme) => {
    if (theme == "dark"){
      let renderedTheme = {
        text: "white",
        background: "black"
      }
      return renderedTheme
    }else if (theme == "light"){
      let renderedTheme = {
        text: "black",
        background: "white"
      }
      return renderedTheme
    }else{
      let renderedTheme = {
        text: "black",
        background: "white"
      }
      return renderedTheme
    }
}
module.exports = renderTheme
