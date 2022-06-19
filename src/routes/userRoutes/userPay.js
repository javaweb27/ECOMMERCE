import ModelUser from "../../models/ModelUser"

export default async function userPay(req, res) {
  const priceToPay = Number(req.body.amount)
  const emailToFilter = { email: req.dataFromToken.email }

  const UserFound = await ModelUser.findOne(emailToFilter)

  const currentMoney = UserFound.money

  if (currentMoney < priceToPay) {
    console.log("Saldo insuficiente, no se pudo pagar")
    res.json({ data: currentMoney })
    return
  }

  const UserUpdated = await ModelUser.findOneAndUpdate(emailToFilter, { money: currentMoney - priceToPay }, { new: true })

  res.json({ data: UserUpdated.money })
}