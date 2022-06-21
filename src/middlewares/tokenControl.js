import jwt from "jsonwebtoken"
import { TOKEN_KEY } from "../config"

function control(send, req, res, next) {
  console.log("acceciendo al middleware tokenControl para validar el token")

  const authorization_header = req.headers["authorization"]
  const authToken = authorization_header?.split(" ")[1]

  jwt.verify(authToken, TOKEN_KEY, (error, decodedToken) => {
    if (error) {
      console.log("El token expiro o es incorrecto")
      res.sendStatus(403)
      return
    }

    console.log("Token valido, pasando a la siguiente funcion")

    if (send) req.dataFromToken = decodedToken.userData

    req.token = authToken
    next()
  })
}

export default {
  verify(req, res, next) {
    control(false, req, res, next)
  },
  verifyAndSendData(req, res, next) {
    control(true, req, res, next)
  }
}
