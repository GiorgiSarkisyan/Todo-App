import { HiX } from "react-icons/hi";
import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { LoaderContext } from "../context/LoaderContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { handleCheckboxChange } from "../handlers/todoHandlers";

/* eslint-disable react/prop-types */
export default function Todo({ todo, deleteTodo }) {
  const { value, active } = todo;
  const { setTodos } = useContext(TodosContext);
  const { setLoading } = useContext(LoaderContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`border-b  ${
        darkMode ? "border-b-[#393A4B]" : "border-b-[#E3E4F1]"
      } p-3 h-[85px] flex items-center gap-6 transition-all duration-300 group`}
    >
      {active ? (
        <img
          src="/active.png"
          alt="active"
          width="36.5px"
          height="18px"
          onClick={() => handleCheckboxChange(todo, setLoading, setTodos)}
          className="select-none cursor-pointer"
        />
      ) : (
        <div
          className={`w-9 h-9 border-2 cursor-pointer ${
            darkMode ? "border-[#393A4B] bg-[#25273D] " : "border-[#E3E4F1]"
          } rounded-full select-none transition-all duration-300`}
          onClick={() => handleCheckboxChange(todo, setLoading, setTodos)}
        ></div>
      )}
      <span
        className={`font-josefin text-[25px] transition-all duration-300 select-none ${
          darkMode ? "text-[#C8CBE7]" : "text-[#494C6B]"
        } ${
          active
            ? `line-through ${darkMode ? "text-[#4D5067]" : "text-[#7b7c81]"}`
            : " "
        }`}
      >
        {value}
      </span>
      <span className="ml-auto opacity-0  transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
        <HiX className="w-6 h-6" color="gray" onClick={deleteTodo} />
      </span>
    </div>
  );
}
