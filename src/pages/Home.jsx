import { useContext } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import "../index.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`w-full h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900" : ""
      } `}
    >
      <Header />
      <Main />
    </div>
  );
}
