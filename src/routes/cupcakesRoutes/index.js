"use strict";

const express = require("express")
const router = express.Router()
const cupcakesController = require("./cupcakesController")

router.get("/", (req, res) => {res.send("Pagina principal del backend escrito en nodejs para ECOMMERCE")})
router.get("/cupcakes", cupcakesController.getCupcakes)
router.patch("/cupcakes/:id", cupcakesController.patchCupcake)

module.exports = router