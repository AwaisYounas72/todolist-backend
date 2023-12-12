import express from "express"
import { AddTodo, DeleteTodo,GetTodo } from "../controller/todoController.js";

const router = express.Router();

router.post("/addTodo",AddTodo)
router.delete("/deleteTodo/:id",DeleteTodo)
router.get("/get-todos",GetTodo)

export default router;
