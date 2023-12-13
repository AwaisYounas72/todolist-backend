import express from "express";
import todoRoutes from "./routes/todoRoutes.js"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import ConnectDB from "./config/db.js"


const app = express();
app.use(express.json());

app.use(cors({
    origin:"https://todolist-mzx4.vercel.app",
    methods:["POST","GET","DELETE","PUT"],
    credentials:true
}))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Database Connection
ConnectDB()

app.use("/api/todo",todoRoutes)

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Server is running")
})
