import bcrypt from "bcrypt"
import ModelUser from "../../models/ModelUser"
import areValidChars from "../../lib/areValidChars"
import { emailRegex } from "../../lib/regex"

export default async function userRegister({ body }, res) {
  if (!(body.email && body.name && body.password) || !emailRegex.test(body.email)) {
    console.error("Datos incompletos o el formato del email es incorrecto, no se ha registrado el usuario")
    res.sendStatus(403)
    return
  }

  if (!areValidChars(body.email) || !areValidChars(body.name)) {
    console.error("\"email\" o \"name\" tienen caracteres invalidos")
    res.sendStatus(403)
    return
  }

  const UserFound = await ModelUser.findOne({ email: btoa(body.email) })

  if (UserFound) {
    console.log("El usuario ya existe")
    res.sendStatus(403)
    return
  }

  const newUser = new ModelUser({
    email: btoa(body.email),
    name: btoa(body.name),
    password: bcrypt.hashSync(body.password, 10),
    money: 75 + Math.floor(Math.random() * (6 + 1)) * 25,
    endDate: Math.trunc((new Date).getTime() / 1000) + 127
  })

  const UserRegistered = await newUser.save()

  console.log("Usuario registrado correctamente")

  res.json({
    email: atob(UserRegistered.email),
    name: atob(UserRegistered.name),
    password: UserRegistered.password
  })

  setTimeout(async () => {
    await ModelUser.deleteOne({ email: btoa(body.email) })

    console.log("Un usuario ha sido eliminado automaticamente")
  }, 127000)
}
