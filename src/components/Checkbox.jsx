import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
`

const CheckboxStyled = styled.input`
    width: 28px;
    height: 28px;
    margin: 0;
    appearance: none;
    border-radius: 50%;
    background-color: ${props => props.theme.secondary};
    border: 2px solid ${props => props.theme.colors.tertiary};

    &:checked {
        background: no-repeat center/60% url("./src/assets/icons/icon-check.svg"),
        ${props => props.theme.defaultColors.primaryBG};

        border: none;
    }

    &:focus {
        outline: none;
    }
`

const Checkbox = () => {
    const theme = useContext(ThemeContext);

    return (
        <CheckboxContainer>
            <CheckboxStyled type="checkbox" theme={theme} />
        </CheckboxContainer>
    )
}

export default Checkbox;