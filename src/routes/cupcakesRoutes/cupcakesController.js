import ModelCupcake from "../../models/ModelCupcake"

export function getCupcakes(req, res) {
  ModelCupcake.find({}, (error, result) => {
    if (error) {
      console.error("Error al encontrar los cupcakes: " + error)
      res.send(result)
      return
    }

    res.json(result)
  })
}

export function patchCupcake(req, res) {
  ModelCupcake.findByIdAndUpdate(req.params.id, req.body, (error, result) => {
    if (error) {
      console.error("Error al vender el cupcake: " + error)
      res.send(result)
      return
    }

    if (!result) {
      console.error("El cupcake no existe", result)
      res.send(result)
      return
    }

    res.json({ data: req.body.sold })

    setTimeout(() => {
      ModelCupcake.findByIdAndUpdate(req.params.id, { sold: false }, (error, result) => {
        if (error || !result) {
          console.error(`No se pudo restaurar el cupcake con id ${req.params.id}`)
          return
        }

        console.log(`Cupcake con id ${req.params.id} restaurado`)
      })
    }, 60000)
  })
}