import express from "express"
import http from "http"
import cors from "cors"
import { CORS_ORIGIN_URL } from "./config"

const app = express()
const httpapp = http.createServer(app)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: [CORS_ORIGIN_URL]
}))

export { app }
export default httpapp