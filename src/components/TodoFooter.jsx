/* eslint-disable react/prop-types */
// src/components/TodoFooter.js

const TodoFooter = ({
  filteredTodos,
  darkMode,
  filter,
  setFilter,
  handleClearCompleted,
}) => {
  return (
    <div
      className={`flex justify-between p-5 font-josefin h-15 mt-auto border-t transition-all duration-300  ${
        darkMode ? "border-t-[#393A4B]" : "border-t-[rgba(227, 228, 241, 1)]"
      }`}
    >
      <span
        className={`${
          window.innerWidth <= 530 ? "text-base" : "text-lg"
        } transition-all duration-300 select-none ${
          darkMode ? "text-[#5B5E7E]" : ""
        }`}
      >
        {`${filteredTodos.length > 0 ? filteredTodos.length : 0}`} items left
      </span>
      <div className="flex flex-wrap gap-2">
        <button
          className={`${
            window.innerWidth <= 530 ? "text-base" : "text-lg"
          } transition-all duration-300 cursor-pointer select-none ${
            filter === "all"
              ? "text-[#3A7CFD]"
              : darkMode
              ? "hover:text-[#E3E4F1] text-[#5B5E7E]"
              : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            window.innerWidth <= 530 ? "text-base" : "text-lg"
          } transition-all duration-300 cursor-pointer select-none ${
            filter === "active"
              ? "text-[#3A7CFD]"
              : darkMode
              ? "hover:text-[#E3E4F1] text-[#5B5E7E]"
              : ""
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            window.innerWidth <= 530 ? "text-base" : "text-lg"
          } transition-all duration-300 cursor-pointer select-none ${
            filter === "completed"
              ? "text-[#3A7CFD]"
              : darkMode
              ? "hover:text-[#E3E4F1] text-[#5B5E7E]"
              : ""
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <span
        className={`${
          window.innerWidth <= 530 ? "text-base" : "text-lg"
        } cursor-pointer transition-all duration-300 select-none ${
          darkMode ? "text-[#5B5E7E] hover:text-[#E3E4F1]" : ""
        }`}
        onClick={handleClearCompleted}
      >
        Clear Completed
      </span>
    </div>
  );
};

export default TodoFooter;
