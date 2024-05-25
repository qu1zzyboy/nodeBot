const Token = require("../models/Token.js")
const getTokenInfo = async (req, res, next) => {
    try {
        let query = {}
        const name = req.query.name
        const date = req.query.date
        if (name) query.Name = name;
        if (date) query.Date = new Date(date)
        var tokenInfo = await Token.find(query)
        res.status(200).json(tokenInfo)
        console.log(tokenInfo)

    } catch (err) {
        console.log(err)
    }
}
module.exports = { getTokenInfo }

