import { Router } from "express";
import { getCupcakes } from "./cupcakesController"

const router = Router()

router.get("/", (req, res) => { res.send("Pagina principal del Backend escrito en Node.js con Express para ECOMMERCE") })
router.get("/cupcakes", getCupcakes)

export default router