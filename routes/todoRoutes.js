import express from "express"
import { AddTodo, DeleteTodo } from "../controller/todoController.js";

const router = express.Router();

router.post("/addTodo",AddTodo)
router.delete("/deleteTodo/:id",DeleteTodo)

export default router;