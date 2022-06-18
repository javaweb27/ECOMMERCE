import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import ModelUser from "../../models/ModelUser"
import areValidChars from "../../lib/areValidChars"

export default function userLogin(req, res) {
  const { email, password } = req.body

  if (!areValidChars(email)) {
    console.error('"email" tiene caracteres invalidos, no se ha registrado el usuario')
    res.sendStatus(403)
    return 
  }

  ModelUser.findOne({ email: btoa(email) }, (error, foundUser) => {
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
