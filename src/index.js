import httpapp, { app } from "./app"
import { PORT } from "./config"
import connectMongoDB from "./mongodb-connection"
import userRoutes from "./routes/userRoutes"
import cupcakesRoutes from "./routes/cupcakesRoutes"

httpapp.listen(PORT, () => console.log(`La aplicacion esta en: http://localhost:${PORT}`))

connectMongoDB()

//ROUTES
app.use(userRoutes)
app.use(cupcakesRoutes)
