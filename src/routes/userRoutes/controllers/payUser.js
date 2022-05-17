"use strict";

const UserModel = require("../userModel")

function payUser(req, res) {
  const priceToPay = Number(req.body.amount)
  const emailToFilter = { email: req.dataFromToken.email }

  UserModel.findOne(emailToFilter, (error, foundUser) => {
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

    UserModel.findOneAndUpdate(emailToFilter, { money: currentMoney - priceToPay }, { new: true }, (error, updatedUser) => {
      res.json({ data: updatedUser.money })
    })
  })
}

module.exports = payUser