import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const TaskInput = styled.div`
    position: relative;
    top: 100px;
    padding: .5rem 1rem .5rem 1rem;
    border-radius: 5px;
    background-color: white;
    display: flex;
    gap: .3rem;
    flex-direction: row-reverse;
`

const TextInputStyled = styled.input`
    width: 90%;
    height: 30px;
    padding: 0 .5rem 0 .5rem;
    border: none;
`

const TextArea = () => <TaskInput>
    <TextInputStyled
        type="text"
        placeholder="Adicione uma tarefa..."
        maxLength={255}>

    </TextInputStyled>
    <Checkbox disabled="true" />
</TaskInput>

export default TextArea;