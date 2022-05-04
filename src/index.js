"use strict";

const express = require("express")
// require("dotenv").config() //uncomment this for local env
const http = require("http")
const cors = require("cors")
const app = express()
const server = http.createServer(app)

//SETTINGS
app.set("port", process.env.PORT || 3050)

//MIDDLEWARES
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({origin: "https://devfjavier.github.io"}))

//SERVER
server.listen(app.get("port"), () => console.log(`La aplicacion esta en el puerto: ${app.get("port")}`))
require("./mongodb-connection")

//ROUTES
app.use(require("./routes/cupcakesRoutes"))
app.use(require("./routes/userRoutes"))