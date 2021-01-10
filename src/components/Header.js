import React from "react";
import "../styles/main.css";

export default function Header() {
  return (
    <div className="nav-wrapper">
      <p className="change-theme">Change Theme</p>
      <ul className="navigation">
        <li data-mode="light" id="light-mode" className="theme-dot"></li>
        <li data-mode="gold" id="gold-mode" className="theme-dot"></li>
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
      <h4 className="test">Testing things</h4>
    </div>
  );
}
