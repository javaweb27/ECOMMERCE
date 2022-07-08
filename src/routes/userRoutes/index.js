import { Router } from "express"
import tokenControl from "../../middlewares/tokenControl"
import userRegister from "./userRegister"
import userLogin from "./userLogin"
import userMoney from "./userMoney"
import userPay from "./userPay"
import userChangePassword from "./userChangePassword"
import userDelete from "./userDelete"

const router = Router()

router.put("/register", userRegister)
router.post("/login", userLogin)
router.delete("/delete", tokenControl.verifyAndSendData, userDelete)
router.patch("/change", tokenControl.verify, userChangePassword)
router.patch("/money", tokenControl.verifyAndSendData, userMoney)
router.patch("/pay", tokenControl.verifyAndSendData, userPay)

export default router
