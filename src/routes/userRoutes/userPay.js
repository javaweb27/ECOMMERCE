import ModelUser from "../../models/ModelUser"

export default function userPay(req, res) {
  const priceToPay = Number(req.body.amount)
  const emailToFilter = { email: req.dataFromToken.email }

  ModelUser.findOne(emailToFilter, (error, foundUser) => {
    if (error) {
      console.error("Error al intentar buscar usuario para pagar", error);
      res.send(null)
      return
    }
    const currentMoney = foundUser.money
    if (currentMoney < priceToPay) {
      console.log("Saldo insuficiente, no se pudo pagar")
      res.json({ data: currentMoney })
      return
    }

    ModelUser.findOneAndUpdate(emailToFilter, { money: currentMoney - priceToPay }, { new: true }, (error, updatedUser) => {
      res.json({ data: updatedUser.money })
    })
  })
}