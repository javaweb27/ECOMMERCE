import bcrypt from "bcrypt"
import ModelUser from "../../models/ModelUser"

export default async function userChangePassword({ body }, res) {
  if (!body.password) {
    res.sendStatus(403)
    return
  }

  const UserUpdated = await ModelUser.findOneAndUpdate(
    { email: btoa(body.email) },
    { password: bcrypt.hashSync(body.password, 10) },
    { new: true }
  )

  if (UserUpdated) {
    res.json({ userData: UserUpdated })
  }
  else {
    res.sendStatus(403)
  }
}
