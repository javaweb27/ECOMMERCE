"use strict";

const UserModel = require("../userModel")

function payUser(req, res) {
  const priceToPay = Number(req.body.amount)
  const user = { email: req.dataFromToken.email }

  UserModel.findOne(user, (error, foundUser) => {
    if (error) {
      console.error("Error al intentar buscar usuario para pagar", error);
      res.send(null)
      return
    }

    const newMoney = foundUser.money >= priceToPay ? foundUser.money - priceToPay : foundUser.money

    UserModel.findOneAndUpdate(user, { money: newMoney }, { new: true }, (error, updatedUser) => {
      res.json({ data: updatedUser.money })
    })
  })
}

module.exports = payUser