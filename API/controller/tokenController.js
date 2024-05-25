const path = require("path")
const converter = require("csvtojson");

const testLocation = path.join(path.resolve(__dirname), "..", "public/uploads/Layer2.csv")
const token = require("../models/Token.js")

/*const insertToken = async () => {
    try {
        const jsonObj = await converter().fromFile(testLocation)
        jsonObj.forEach(item => {
            item.WInflation = (parseFloat(item.WInflation.replace("%", "")) / 100).toFixed(3)
        })
        await token.insertMany(jsonObj)
        console.log("Successfully inserted")
    } catch (err) {
        console.log(err)
    }
}
insertToken()
    .then(() => {
        console.log("Insertion process completed successfully.");
        // You can perform additional actions here if needed
    })
    .catch(err => {
        console.error("Error during insertion:", err);
    });*/
const insertToken = async (req, res) => {
    try {
        const jsonObj = await converter().fromFile(testLocation)
        console.log(jsonObj)
        await token.insertMany(jsonObj)
        res.send({ status: 200, sucess: true, msg: "tokenInformation has been successfully inserted" })
    } catch (err) {
        console.log(err)
    }
}
const importToken = async (req, res) => {
    try {
        res.send({ status: 200, success: true, msg: "Successfully imported" })
    } catch (err) {
        res.send({ status: 400, success: false, msg: err.message })
    }
}

module.exports = { importToken, insertToken } 