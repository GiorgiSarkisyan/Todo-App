import { useContext } from "react";
import LightBackground from "../../public/LightBackground.jpg";
import DarkBackground from "../../public/DarkBackground.jpg";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Header() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <header className="fixed top-0 left-0 w-full z-0">
      <img
        src={darkMode ? DarkBackground : LightBackground}
        alt="Background"
        className="object-cover min-h-[274px] w-full max-w-[1600px] mx-auto select-none"
      />
    </header>
  );
}
