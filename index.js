import express from "express";
import todoRoutes from "./routes/todoRoutes.js"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import ConnectDB from "./config/db.js"


const app = express();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000",
    methods:["POST","GET","DELETE","PUT"],
    credentials:true
}))
// Database Connection
ConnectDB()

app.use("/api/todo",todoRoutes)

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Server is running")
})