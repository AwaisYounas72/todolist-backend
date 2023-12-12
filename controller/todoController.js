import Todo from "../models/todoModel.js";


export const AddTodo = async (req, res) => {
    try {
        const { title } = req.body;

        const todo = new Todo({
            title: title
        })

        await todo.save();

        return res.status(201).json({ message: "Todo added", result: todo })

    } catch (error) {
        return res.status(500).json("Something went wrong")
    }
}

export const DeleteTodo = async (req, res) => {
    try {

        const deletedTodo = await Todo.findByIdAndDelete(req.params.id)

        return res.status(201).json({ message: "Todo deleed", result: deletedTodo })

    } catch (error) {
        return res.status(500).json("Something went wrong")
    }
}
