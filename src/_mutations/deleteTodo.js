// _mutations/deleteTodo.js
import { toast } from "react-hot-toast";

export const deleteTodo = async (id, setTodos, todos, setLoading) => {
  try {
    setLoading(true);

    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodos(updatedTodos);

    toast.success("Todo deleted successfully!");
  } catch (error) {
    console.error("Error deleting todo:", error);
    toast.error("Failed to delete todo");
  } finally {
    setLoading(false);
  }
};
