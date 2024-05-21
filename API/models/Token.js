const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
    },
    Date: {
        type: Date,
        require: true,
    },
    Emmision: {
        type: Number
    },
    Inflation: {
        type: Number
    },
    WInflation: {
        type: Number,
        require: false,
        default: null
    },
    MInflation: {
        type: Number,
        require: false,
        default: null
    }
})
modules.exports = mongoose.model("Token", tokenSchema)