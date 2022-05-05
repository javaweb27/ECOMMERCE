"use strict";

const UserModel = require("../userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

function loginUser(req, res) {
  const { email, password } = req.body

  try {
    btoa(email)
  }
  catch (_error) {
    console.error('"email" tiene caracteres invalidos, no se ha registrado el usuario')
    res.sendStatus(403)
    return
  }

  UserModel.findOne({ email: btoa(email) }, (error, foundUser) => {
    if (error) {
      console.error("Error en el login de un usuario")
      res.send(null)
      return
    }

    if (!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
      console.error("No existe el usuario o la contraseña es incorrecta")
      res.sendStatus(403)
      return
    }

    jwt.sign({ userData: foundUser }, process.env.TOKEN_KEY, { expiresIn: "90s" }, (error, token) => {
      res.json({ token })
    })
  })
}

module.exports = loginUser