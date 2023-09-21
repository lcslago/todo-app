import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const Header = styled.header`
    position: absolute;
    background-image: ${(props) => props.theme.background.mobileBG};
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 200px;
`

const BannerTitle = styled.div`
    display: flex;
    width: 85%;
    margin: auto;
    padding: 2.8rem 0;
    span {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: .5rem;
        user-select: none;
    }
`

const Banner = () => {
    const theme = useContext(ThemeContext);

    return (
        <Header theme={theme}>
            <BannerTitle>
                <span><b>todo</b></span>
                <div></div>
            </BannerTitle>
        </Header>
    );
};
export default Banner;