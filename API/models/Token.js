const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
    },
    Category: {
        type: String,
        require: true,
    },
    Date: {
        type: Date,
        require: true,
        unique: true,
    },
    CS: {
        type: Number,
        require: true,
    },
    Emmision: {
        type: Number
    },
    DInflation: {
        type: Number,
        require: false,
        default: null
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
module.exports = mongoose.model("Token", tokenSchema)