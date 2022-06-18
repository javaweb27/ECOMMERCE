import { config } from "dotenv"
config()

export const PORT = process.env.PORT || 3060
export const CORS_ORIGIN_URL = process.env.CORS_ORIGIN_URL || "http://localhost:3000"
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"
export const TOKEN_KEY = process.env.TOKEN_KEY