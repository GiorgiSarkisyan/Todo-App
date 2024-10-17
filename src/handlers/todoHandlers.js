import { deleteTodo } from "../_mutations/deleteTodo";
import { updateTodo } from "../_mutations/updateTodo";

// handler to clearing completed todos
export const handleClearCompleted = async (todos, setTodos, setLoading) => {
  setLoading(true);

  console.log(setLoading);

  const activeTodos = todos.filter((todo) => todo.active === true);

  await Promise.all(
    activeTodos.map((todo) => deleteTodo(todo._id, setTodos, todos, setLoading))
  );

  setTodos((prevTodos) => prevTodos.filter((todo) => todo.active === false));
  setLoading(false);
};

// handler to update todos
export const handleCheckboxChange = async (todo, setLoading, setTodos) => {
  const newActiveState = !todo.active;
  await updateTodo(todo._id, newActiveState, setLoading, setTodos);
};
