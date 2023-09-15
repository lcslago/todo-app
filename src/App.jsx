import React from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";
import Banner from "./components/Banner.jsx";
import TextInput from "./components/TextInput.jsx";

const AppContainer = styled.main`
  width: 85%;
  margin: 0 auto;
  max-width: 100%;
`

export default () => (
  <>
    <GlobalStyle />
    <Banner />
    <AppContainer>
      <TextInput />
    </AppContainer>
  </>
);
