import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { LoaderProvider } from "./context/LoaderContext";
import { TodosProvider } from "./context/TodosContext";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <TodosProvider>
        <LoaderProvider>
          <Toaster />
          <Home />
        </LoaderProvider>
      </TodosProvider>
    </DarkModeProvider>
  );
}

export default App;
