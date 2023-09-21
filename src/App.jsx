import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";
import Banner from "./components/Banner.jsx";
import TextInput from "./components/TextInput.jsx";
import theme from "./theme.jsx";

const AppContainer = styled.main`
  width: 85%;
  margin: 0 auto;
  max-width: 100%;
`

export default () => {
  const [currentTheme, setCurrentTheme] = useState('lightTheme')

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <Banner />
        <AppContainer>
          <TextInput />
        </AppContainer>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};
