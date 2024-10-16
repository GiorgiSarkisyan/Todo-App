import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { TodosProvider } from "./context/TodosContext.jsx";
import { LoaderProvider } from "./context/LoaderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <TodosProvider>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </TodosProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
