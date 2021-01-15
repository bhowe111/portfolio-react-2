import React from "react";
import Toggle from "../config/Toggle";
import { whiteTheme, goldTheme } from "../styles/theme";
import { useGoldMode } from "../useGoldMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";

export default function Header() {
  const [theme, toggleTheme, componentMounted] = useGoldMode();
  const themeMode = theme === "white" ? whiteTheme : goldTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === "white" ? whiteTheme : goldTheme}>
      <GlobalStyles />

      <div className="nav-wrapper">
        <p className="change-theme">
          <small>Change Theme</small>
        </p>
        <ul className="navigation">
          <li>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>

        <ul className="navigation">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brendan-howe/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/bhowe111">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </ThemeProvider>
  );
}
