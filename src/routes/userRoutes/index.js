"use strict";

const express = require("express")
const router = express.Router()
const tokenControl = require("../../middlewares/tokenControl")
const userRegister = require("./userRegister")
const userLogin = require("./userLogin")
const userMoney = require("./userMoney");
const userPay = require("./userPay");

router.post("/register", userRegister)
router.post("/login", userLogin)
router.patch("/money", tokenControl.verifyAndSendData, userMoney)
router.patch("/pay", tokenControl.verifyAndSendData, userPay)

module.exports = router