const renderTheme = (theme) => {
    if (theme == "dark"){
      let renderedTheme = {
        quote: "9f9f9f",
        author: "fff",
        background: "151515",
        symbol: "79ff97"
      }
      return renderedTheme
    }else if (theme == "radical"){
      let renderedTheme = {
        quote: "a9fef7",
        author: "fe428e",
        background: "141321",
        symbol: "f8d847"
      }
      return renderedTheme
    }else if (theme == "merko"){
      let renderedTheme = {
        quote: "68b587",
        author: "abd200",
        background: "0a0f0b",
        symbol: "b7d364"
      }
      return renderedTheme
    }else if (theme == "gruvbox"){
      let renderedTheme = {
        quote: "8ec07c",
        author: "fabd2f",
        background: "282828",
        symbol: "fe8019"
      }
      return renderedTheme
    }else if (theme == "tokyonight"){
      let renderedTheme = {
        quote: "38bdae",
        author: "70a5fd",
        background: "1a1b27",
        symbol: "bf91f3"
      }
      return renderedTheme
    }else{
      let renderedTheme = {
        quote: "333",
        author: "2f80ed",
        background: "fffefe",
        symbol: "4c71f2"
      }
      return renderedTheme
    }
}
module.exports = renderTheme
