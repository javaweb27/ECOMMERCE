const mongoose = require("mongoose")

const connection = mongoose.connect(process.env.MONGODB_URI)
  .then(db => console.log("Base de datos: conexion exitosa"))
  .catch(err => console.log("Ha ocurrido un error en la conexion de la base de datos:", err))

module.exports = connection