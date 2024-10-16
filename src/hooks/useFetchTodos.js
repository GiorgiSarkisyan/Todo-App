// src/hooks/useFetchTodos.js

import { useEffect, useState } from "react";

const useFetchTodos = (setTodos) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://todo-app-nla7.onrender.com/api/todos"
        );
        const data = await response.json();
        setTodos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setTodos]);

  return { loading };
};

export default useFetchTodos;
