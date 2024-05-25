const express = require("express")
const router = express.Router();
const { getTokenInfo } = require("../controller/infoController")
router.get("/token", getTokenInfo);
module.exports = router