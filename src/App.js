import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useGoldMode } from "./useGoldMode";
import { whiteTheme, goldTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import Toggle from "./config/Toggle";

function App() {
  const [theme, toggleTheme, componentMounted] = useGoldMode();
  const themeMode = theme === "white" ? whiteTheme : goldTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme === "white" ? whiteTheme : goldTheme}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <h1>it is a {theme === "white" ? "white theme" : "gold theme"}</h1>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
