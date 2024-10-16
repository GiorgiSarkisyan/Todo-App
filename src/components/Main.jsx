import Logo from "./Logo";
import TodoList from "./TodoList";

export default function Main() {
  return (
    <main className="relative w-[600px] flex flex-col gap-6 mx-auto z-30 mt-32">
      <Logo />
      <TodoList />
    </main>
  );
}
