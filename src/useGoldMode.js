import { useEffect, useState } from "react";

export const useGoldMode = () => {
  const [theme, setTheme] = useState("white");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "white") {
      setMode("gold");
    } else {
      setMode("white");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode("white");
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
