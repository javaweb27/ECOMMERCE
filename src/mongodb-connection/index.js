import { connect } from "mongoose"
import { MONGODB_URI } from "../config"

export default async function () {
  console.log("-connecting to MongoDB...")

  try {
    await connect(MONGODB_URI)
    console.log("-MongoDB connection: ok")
  } catch (error) {
    console.error("-error to connect to MongoDB:", error)
  }
}
