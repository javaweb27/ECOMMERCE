import ModelCupcake from "../../models/ModelCupcake"

export async function getCupcakes(req, res) {
  const Cupcakes = await ModelCupcake.find({})

  res.json(Cupcakes)
}

export async function patchCupcake(req, res) {
  const CupcakeUpdated = await ModelCupcake.findByIdAndUpdate(req.params.id, req.body, { new: true })

  if (!CupcakeUpdated) {
    console.error("El cupcake no existe: ", CupcakeUpdated)
    res.send(CupcakeUpdated)
    return
  }

  res.json({ data: CupcakeUpdated.sold })

  setTimeout(async () => {
    await ModelCupcake.findByIdAndUpdate(req.params.id, { sold: false })

    console.log(`Cupcake con id ${req.params.id} restaurado`)

  }, 60000)
}