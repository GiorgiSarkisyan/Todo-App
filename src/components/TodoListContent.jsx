/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import Todo from "./Todo";

function TodoListContent({
  fetchLoading,
  loading,
  filteredTodos,
  deleteTodo,
  filter,
}) {
  return (
    <>
      <div className="overflow-y-auto h-[500px] scrollbar-track-black scrollbar-thin">
        {fetchLoading || loading ? (
          <Spinner />
        ) : filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              key={todo._id}
              deleteTodo={() => deleteTodo(todo._id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10 text-2xl">
            {filter === "all"
              ? "Start by adding some Todos!"
              : filter === "active"
              ? "No active Todos"
              : "No completed Todos"}
          </p>
        )}
      </div>
    </>
  );
}

export default TodoListContent;
