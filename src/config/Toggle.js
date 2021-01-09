import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

// svgs from flaticon.com
import { ReactComponent as MoonIcon } from "../images/svg/moon.svg";
import { ReactComponent as SunIcon } from "../images/svg/sun.svg";

// Toggle Container
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ whiteTheme }) =>
        whiteTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ whiteTheme }) =>
        whiteTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

// end Toggle Container

const Toggle = ({ theme, toggleTheme }) => {
  const isWhite = theme === "white";
  return (
    <ToggleContainer whiteTheme={isWhite} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
