import { useEffect, useState } from "react";
import Todo from "./Todo";
import Input from "./Input";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/todos");
      const data = await response.json();
      setTodos(data);
    }
    fetchData();
  }, []);

  console.log(todos);

  return (
    <>
      <Input setTodos={setTodos} />

      <div className="flex flex-col w-full bg-white h-[540px] shadow-custom rounded-xl p-1">
        <div className="overflow-y-auto h-[500px] scrollbar-track-black scrollbar-thin">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo._id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>

        <div className="flex justify-between p-5 font-josefin h-15 mt-auto border-t border-t-[rgba(227, 228, 241, 1)]">
          <span className="text-lg">{todos.length} items left</span>
          <div className="flex gap-2">
            <span className="text-lg">All</span>
            <span className="text-lg">Active</span>
            <span className="text-lg">Completed</span>
          </div>
          <span className="text-lg">Clear Completed</span>
        </div>
      </div>
    </>
  );
}
