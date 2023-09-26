import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const ThemeIconContainer = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    width: 25px;
    height: 25px;
    background-image: ${props => props.theme.icons.toggleTheme};
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: background 0.2s ease-in;

`

export const ThemeToggler = ({ onThemeSwitch }) => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeIconContainer onClick={onThemeSwitch}>
            {/* <img src={theme.icons.toggleTheme} /> */}
        </ThemeIconContainer>
    );
};