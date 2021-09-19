const fetchQuotes = require('/home/runner/GitHub-README-Quotes/src/fetcher/fetchQuotes')
const renderSVG = require('/home/runner/GitHub-README-Quotes/src/renderer/renderSVG')

module.exports = async (req,res)=>{
    const {type} = req.query
    const {theme} = req.query
    var data = await fetchQuotes()
    res.setHeader("Content-Type", "image/svg+xml")
    res.setHeader("Cache-Control", `public, max-age=600`);
    res.send(renderSVG(data, type, theme))
})
