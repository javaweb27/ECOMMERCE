const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    email: String,
    name: String,
    password: String,
    money: Number
})

const UserModel = model("users", UserSchema)

module.exports = UserModel