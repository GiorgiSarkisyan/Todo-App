import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const changeFavicon = (iconUrl) => {
      const link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.href = iconUrl;
      document.head.appendChild(link);
      document.title = "Todo App";
    };

    changeFavicon("/favicon.png");
  }, []);

  return (
    <>
      <Toaster />
      <Home />
    </>
  );
}

export default App;
