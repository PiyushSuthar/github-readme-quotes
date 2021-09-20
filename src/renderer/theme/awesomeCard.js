const renderTheme = (theme) => {
    if (theme == "dark"){
      let renderedTheme = {
        quote: "white",
        author: "white",
        background: "black"
      }
      return renderedTheme
    }else if (theme == "light"){
      let renderedTheme = {
        quote: "black",
        author: "black",
        background: "white"
      }
      return renderedTheme
    }else{
      let renderedTheme = {
        quote: "black",
        author: "black",
        background: "white"
      }
      return renderedTheme
    }
}
module.exports = renderTheme
