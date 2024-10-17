import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const MONGODB_URI =
  "mongodb+srv://giorgi:giogio13S@cluster0.8si4fbh.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://todo-app-amber-nu.vercel.app",
      "https://todo-app-nla7.onrender.com",
    ],
  })
);

app.use(express.json());

const todoSchema = new mongoose.Schema({
  value: String,
  active: Boolean,
});

const Todo = mongoose.model("todos", todoSchema);

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos.length === 0) {
      return res.status(200).json({ message: "No todos found" });
    }
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/todos", async (req, res) => {
  console.log("POST request received:", req.body);
  const { value, active } = req.body;

  const newTodo = new Todo({
    value,
    active,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error("Error while saving to MongoDB:", err);
    res.status(400).json({ message: err.message });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    console.error("Error while deleting todo:", err);
    res.status(500).json({ message: err.message });
  }
});

// Update the active status of a Todo
app.patch("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { active },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error("Error while updating todo:", err);
    res.status(500).json({ message: err.message });
  }
});
