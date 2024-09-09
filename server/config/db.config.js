import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const MONGO_PORT = process.env.MONGO_URL

function ConnectDB() {
  mongoose.connect(MONGO_PORT).then(() => console.log(`db is connected`)).catch((errr) => console.log(errr.message))
}

export default ConnectDB