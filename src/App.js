import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useGoldMode } from "./useGoldMode";
import { whiteTheme, goldTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import Toggle from "./config/Toggle";

import Header from "./components/Header";
import Landing from "./pages/Landing";

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
          <Header />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <h1>it is a {theme === "white" ? "white theme" : "gold theme"}</h1>
          <Landing />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
