import ModelUser from "../../models/ModelUser"

export default async function userDelete(req, res) {
  await ModelUser.deleteOne({ email: req.dataFromToken.email })
  console.log("Un usuario reigstrado ha eliminado su cuenta")
  res.json({ message: "user deleted" })
}
