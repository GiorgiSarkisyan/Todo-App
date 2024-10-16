import toast from "react-hot-toast";

export async function addTodo(value, isActive, setState, setLoading) {
  const newTodo = { active: isActive, value };

  setLoading(true);

  try {
    const response = await fetch(
      "https://todo-app-nla7.onrender.com/api/todos",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      }
    );

    if (!response.ok) throw new Error("Failed to post the new todo");

    const createdData = await response.json();
    setState((prevData) =>
      Array.isArray(prevData) ? [...prevData, createdData] : [createdData]
    );

    toast.success("Todo added successfully!", {
      className:
        "bg-green-500 text-white font-bold text-lg p-4 rounded-lg shadow-lg",
    });
  } catch (error) {
    console.error("Error:", error);
    toast.error("Failed to add todo.", {
      className:
        "bg-red-500 text-white font-bold text-lg p-4 rounded-lg shadow-lg",
    });
  } finally {
    setLoading(false);
  }
}
