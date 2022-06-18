import { Router } from "express";
import tokenControl from "../../middlewares/tokenControl"
import userRegister from "./userRegister"
import userLogin from "./userLogin"
import userMoney from "./userMoney"
import userPay from "./userPay"

const router = Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.patch("/money", tokenControl.verifyAndSendData, userMoney)
router.patch("/pay", tokenControl.verifyAndSendData, userPay)

export default router