import { Schema, model } from "mongoose"

const schema = new Schema({
  email: String,
  name: String,
  password: String,
  money: Number,
  endDate: Number
})

const ModelUser = model("users", schema)

export default ModelUser
