import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const TaskInput = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 100px;
    padding: .5rem 1rem .5rem 1rem;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.secondary};
    transition: background 0.2s ease-in;
    display: flex;
    gap: .3rem;
    flex-direction: row-reverse;
`

const TextInputStyled = styled.input`
    width: 90%;
    height: 30px;
    padding: 0 .5rem 0 .5rem;
    border: none;
    background-color: ${props => props.theme.colors.secondary};
    transition: background 0.2s ease-in;

    &::placeholder {
        color: ${props => props.theme.colors.quaternary};
        transition: 0.2s ease-in;
    }
`

const TextArea = () => <TaskInput>
    <TextInputStyled
        type="text"
        placeholder="Adicione uma tarefa..."
        maxLength={255}>

    </TextInputStyled>
    <Checkbox />
</TaskInput>

export default TextArea;