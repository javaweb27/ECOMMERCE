import ModelUser from "../../models/ModelUser"

export default function userMoney(req, res) {
  ModelUser.findOne({ email: req.dataFromToken.email }, (error, foundUser) => {
    console.log("buscando al usuario")
    if (error) {
      console.error("Error al intentar buscar usuario para enviar dinero actual");
      res.send(null)
      return
    }

    if (!foundUser) {
      res.sendStatus(403)
      return
    }
    console.log("encontrado y enviando jason")
    res.json({ data: foundUser.money })
  })
}