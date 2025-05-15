import express, {json} from "express"
import dotenv from "dotenv"
import {connectiontodatabase} from "./config/database";
import authRoutes from "./routes/AuthRoutes";

dotenv.config()
connectiontodatabase()

const app = express()

app.use(express.json())
app.use('/api/auth', authRoutes)
export default app