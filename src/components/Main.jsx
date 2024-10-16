import Logo from "./Logo";
import TodoList from "./TodoList";

export default function Main() {
  return (
    <main
      className={`relative max-w-[600px] flex flex-col gap-6  ${
        window.innerWidth <= 630 ? "mx-5" : "mx-auto"
      } z-30 pt-32`}
    >
      <Logo />
      <TodoList />
    </main>
  );
}
