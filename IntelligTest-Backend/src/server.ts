import express from "express"
import dotenv from "dotenv"
import {connectiontodatabase} from "./config/database";

dotenv.config()
connectiontodatabase()

const app = express()
export default app