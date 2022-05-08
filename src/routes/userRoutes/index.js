"use strict";

const express = require("express")
const router = express.Router()
const tokenControl = require("../../middlewares/tokenControl")
const registerUser = require("./controllers/registerUser")
const loginUser = require("./controllers/loginUser")
const moneyUser = require("./controllers/moneyUser");
const payUser = require("./controllers/payUser");

router.post("/register", registerUser)
router.post("/login", loginUser)
router.patch("/money", tokenControl.verifyAndSendData, moneyUser)
router.patch("/pay", tokenControl.verifyAndSendData, payUser)

module.exports = router