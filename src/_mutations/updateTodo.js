import toast from "react-hot-toast";

export async function updateTodo(id, active, setLoading, setTodos) {
  setLoading(true);
  await fetch(`https://todo-app-nla7.onrender.com/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ active }),
  });

  setTodos((prevTodos) =>
    prevTodos.map((todo) => (todo._id === id ? { ...todo, active } : todo))
  );
  setLoading(false);

  toast.success("Todo updated successfully", {
    style: {
      width: "300px",
      height: "60px",
      fontSize: "20px",
    },
  });
}
