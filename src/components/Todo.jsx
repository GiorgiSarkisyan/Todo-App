import { HiX } from "react-icons/hi";

/* eslint-disable react/prop-types */
export default function Todo({ todo, todos, setTodos }) {
  const { value, _id } = todo;

  const deleteTodo = async () => {
    try {
      // Check if the todo has an _id before sending the request
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

      // Update the state to remove the deleted todo
      setTodos(todos.filter((t) => t._id !== _id));
    } catch (error) {
      console.error("Error while deleting todo:", error);
    }
  };

  return (
    <div className=" border-b border-b-[#E3E4F1] p-3 h-[85px] flex items-center gap-6">
      <input type="checkbox" className="w-7 h-7" />
      <span className="font-josefin text-[25px] text-[#494C6B]">{value}</span>
      <span className="ml-auto">
        <HiX className="w-6 h-6" color="gray" onClick={deleteTodo} />
      </span>
    </div>
  );
}
