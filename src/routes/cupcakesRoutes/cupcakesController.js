import ModelCupcake from "../../models/ModelCupcake"

export async function getCupcakes(req, res) {
  const Cupcakes = await ModelCupcake.find({})

  res.json(Cupcakes)
}
