/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Input({ setTodos }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    const newTodo = {
      active: false,
      value: inputValue,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error response:", errorResponse);
        throw new Error("Failed to post the new todo");
      }

      const createdTodo = await response.json();
      console.log("Todo created:", createdTodo);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.value === newTodo.value
            ? { ...todo, _id: createdTodo._id }
            : todo
        )
      );
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] h-16 bg-white rounded-md p-3.5 flex gap-4"
    >
      <div className="w-9 h-9 border-2 border-[#E3E4F1] rounded-full bg-white"></div>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Type your todo..."
        className="placeholder-[#9495A5] text-gray-500 p-1 text-2xl font-josefin focus:ring-2 focus:ring-gray-300 focus:outline-none rounded-md h-9 w-[100%]"
      />
    </form>
  );
}
