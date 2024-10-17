/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { addTodo } from "../_mutations/addTodo";
import { LoaderContext } from "../context/LoaderContext";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Input({ setTodos }) {
  const { setLoading } = useContext(LoaderContext);
  const { darkMode } = useContext(DarkModeContext);
  const [isActive, setIsActive] = useState(false);

  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    addTodo(inputValue, isActive, setTodos, setLoading);
    setInputValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-[100%] h-16 ${
        darkMode ? "bg-[#25273D]" : "bg-white"
      } rounded-md p-3.5 flex gap-4 transition-all	duration-300`}
    >
      {isActive ? (
        <img
          src="/active.png"
          alt="active"
          width="36.5px"
          height="18px"
          onClick={() => setIsActive((p) => !p)}
          className="select-none cursor-pointer"
        />
      ) : (
        <div
          className={`w-9 h-9 border-2 ${
            darkMode ? "bg-[ #25273D] border-[#393A4B]" : "border-[#E3E4F1] "
          } rounded-full  select-none transition-all duration-300	cursor-pointer`}
          onClick={() => setIsActive((p) => !p)}
        ></div>
      )}
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Type your todo..."
        className={`${
          darkMode
            ? "focus:ring-2 focus:ring-[#767992] bg-[#25273D] placeholder-[#767992]"
            : ""
        } transition-all	duration-300 text-gray-500 p-1 text-2xl font-josefin placeholder-[#9495A5] focus:outline-none rounded-md h-9 w-[100%] `}
      />
    </form>
  );
}
