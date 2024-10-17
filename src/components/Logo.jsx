import { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Logo() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex justify-between  w-[100%]">
      <span className="font-[700] text-[40px] tracking-[15px] select-none font-josefin text-white text-4xl">
        TODO
      </span>
      {darkMode ? (
        <HiMoon
          size={"40px"}
          color="white"
          onClick={() => setDarkMode((p) => !p)}
          className="cursor-pointer"
        />
      ) : (
        <HiSun
          size={"40px"}
          color="white"
          className="cursor-pointer"
          onClick={() => setDarkMode((p) => !p)}
        />
      )}
    </div>
  );
}
