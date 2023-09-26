import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { ThemeToggler } from "./ThemeToggler";

const Header = styled.header`
    position: absolute;
    background-image: ${(props) => props.theme.background.mobileBG};
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 200px;
    transition: background 0.2s ease-in;
`

const BannerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: auto;
    padding: 2.8rem 0;
    span {
        font-size: 1.8rem;
        text-transform: uppercase;
        letter-spacing: .5rem;
        user-select: none;
        color: white;
    }
`

const Banner = ({ onThemeSwitch }) => {
    const theme = useContext(ThemeContext);

    return (
        <Header theme={theme}>
            <BannerTitle>
                <span><b>todo</b></span>
                <ThemeToggler onThemeSwitch={onThemeSwitch}></ThemeToggler>
            </BannerTitle>
        </Header>
    );
};
export default Banner;