import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

// Toggle Container
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.mainText};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4em;
  height: 2rem;
  border-radius: 2em;
  transition: all ease .3s;

    &:after, &:before {
      position: relative;
      display: block;
      content: "";
      with: 50%;
      height: 100%;
      transition: all .3s ease;
    }

  }
  
`;

// end Toggle Container

const Toggle = ({ theme, toggleTheme }) => {
  const isWhite = theme === "white";
  return (
    <ToggleContainer
      whiteTheme={isWhite}
      onClick={toggleTheme}
    ></ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
