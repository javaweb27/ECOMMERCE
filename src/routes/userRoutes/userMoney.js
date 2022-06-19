import ModelUser from "../../models/ModelUser"

export default async function userMoney(req, res) {
  const UserFound = await ModelUser.findOne({ email: req.dataFromToken.email })

  if (!UserFound) {
    res.sendStatus(403)
    return
  }

  res.json({ data: UserFound.money })
}