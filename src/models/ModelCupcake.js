import { Schema, model } from "mongoose"

const schema = new Schema({
  _id: Number,
  id: Number,
  flavor: String,
  color: String,
  description: String,
  price: Number,
  sold: Boolean,
  img: String
})

const ModelCupcake = model("cupcakes", schema)

export default ModelCupcake