import { Router } from "express";
import { getCupcakes, patchCupcake } from "./cupcakesController"

const router = Router()

router.get("/", (req, res) => { res.send("Pagina principal del backend escrito en nodejs para ECOMMERCE") })
router.get("/cupcakes", getCupcakes)
router.patch("/cupcakes/:id", patchCupcake)

export default router