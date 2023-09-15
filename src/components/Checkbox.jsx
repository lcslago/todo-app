import React from "react";
import styled from "styled-components";

const CheckboxStyled = styled.input`
    width: 25px;
    margin: 0;
`

const Checkbox = (isDisabled) => <CheckboxStyled type="checkbox" disabled={isDisabled} />

export default Checkbox;