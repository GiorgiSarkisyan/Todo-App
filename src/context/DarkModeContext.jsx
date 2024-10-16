/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DarkModeContext = createContext(); // Declare the context

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Export both the context and the provider
export { DarkModeProvider, DarkModeContext };
