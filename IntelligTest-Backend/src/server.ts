import express, {json} from "express"
import dotenv from "dotenv"
import {connectiontodatabase} from "./config/database";
import authRoutes from "./routes/AuthRoutes";
import {corsConfig} from "./config/cors";
import cors from "cors";

dotenv.config()
connectiontodatabase()

const app = express()

app.use(cors(corsConfig))
app.use(express.json())
app.use('/api/auth', authRoutes)
export default app