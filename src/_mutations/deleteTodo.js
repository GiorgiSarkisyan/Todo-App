import toast from "react-hot-toast";

export async function deleteTodo(_id, setState, data) {
  try {
    if (!_id) {
      console.error("Todo ID is missing.");
      return;
    }

    const response = await fetch(`http://localhost:5000/api/todos/${_id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete the todo");
    }
    setState(data.filter((t) => t._id !== _id));

    toast.success("Todo deleted successfully", {
      style: {
        width: "300px",
        height: "60px",
        fontSize: "20px",
      },
    });
  } catch (error) {
    console.error("Error while deleting todo:", error);
  }
}
