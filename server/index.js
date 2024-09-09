import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import ConnectDB from "./config/db.config.js";
import route from "./routes/route.js";
dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
ConnectDB()

app.use(cors({
  origin: "http://localhost:3000"
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(route)

app.listen(port, () => {
  console.log(`your server is serv on ${port}`)
})