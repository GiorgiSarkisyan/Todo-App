import { useContext, useState } from "react";
import Input from "./Input";
import { LoaderContext } from "../context/LoaderContext";
import { TodosContext } from "../context/TodosContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { handleClearCompleted } from "../handlers/todoHandlers";
import useFetchTodos from "../hooks/useFetchTodos";
import TodoFooter from "./TodoFooter";
import TodoListContent from "./TodoListContent";
import { deleteTodo } from "../_mutations/deleteTodo";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [filter, setFilter] = useState("all");
  const { loading, setLoading } = useContext(LoaderContext);
  const { darkMode } = useContext(DarkModeContext);

  const { loading: fetchLoading } = useFetchTodos(setTodos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return todo.active;
    if (filter === "completed") return !todo.active;
    return true;
  });

  return (
    <>
      <Input setTodos={setTodos} />
      <div
        className={`${
          darkMode
            ? "bg-[#25273D] shadow-custom-dark"
            : "bg-white shadow-custom-light"
        } flex flex-col w-full h-[540px] rounded-xl p-1 transition-all duration-300`}
      >
        <TodoListContent
          fetchLoading={fetchLoading}
          loading={loading}
          filteredTodos={filteredTodos}
          deleteTodo={(id) => deleteTodo(id, setTodos, todos, setLoading)}
          filter={filter}
        />

        <TodoFooter
          filteredTodos={filteredTodos}
          darkMode={darkMode}
          filter={filter}
          setFilter={setFilter}
          handleClearCompleted={() =>
            handleClearCompleted(todos, setTodos, setLoading)
          }
        />
      </div>
    </>
  );
}
