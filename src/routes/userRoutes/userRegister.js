import bcrypt from "bcrypt"
import ModelUser from "../../models/ModelUser"
import areValidChars from "../../lib/areValidChars"

export default function userRegister(req, res) {
  const { email: reqEmail, name: reqName, password: reqPassword } = req.body

  const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{1,7})+$/;

  if (!(reqEmail && reqName && reqPassword) || !emailRegex.test(reqEmail)) {
    console.error("Datos incompletos o caracteres invalidos en el email, no se ha registrado el usuario")
    res.sendStatus(403)
    return
  }

  if (!areValidChars(reqEmail), !areValidChars(reqName)) {
    console.error('"email" o "name" tienen caracteres invalidos')
    res.sendStatus(403)
    return
  }

  ModelUser.findOne({ email: btoa(reqEmail) }, (error, foundUser) => {
    if (error) {
      console.error("Error al buscar al usuario para ver si ya esta registrado")
      res.send(null)
      return
    }

    if (foundUser) {
      console.log("El usuario ya existe")
      res.sendStatus(403)
      return
    }

    const newUser = new ModelUser({
      email: btoa(reqEmail),
      name: btoa(reqName),
      password: bcrypt.hashSync(reqPassword, 10),
      money: 60 + Math.floor(Math.random() * 60)
    })

    newUser.save((error, registeredUser) => {
      if (error) {
        console.error("Error al registar el usuario: ", error)
        res.send(null)
        return
      }

      console.log("Usuario registrado correctamente")
      res.json({
        email: atob(registeredUser.email),
        name: atob(registeredUser.name),
        password: registeredUser.password
      })
    })

    setTimeout(() => {
      ModelUser.deleteOne({ email: btoa(reqEmail) }, (error) => {
        if (error) {
          console.error("Error al eliminar a un usuario automaticamente")
          return
        }

        console.log("Un usuario ha sido eliminado automaticamente")
      })
    }, 90000)
  })
}