const { Schema, model } = require("mongoose")

const CupcakeSchema = new Schema({
    _id: Number,
    id: Number,
    flavor: String,
    color: String,
    description: String,
    price: Number,
    sold: Boolean,
    img: String
})

const CupcakeModel = model("cupcakes", CupcakeSchema)

module.exports = CupcakeModel