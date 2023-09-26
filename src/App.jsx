import React, { useEffect, useState } from "react";
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
  const [currentTheme, setCurrentTheme] = useState("lightTheme")

  const switchTheme = () => {
    const updatedTheme = currentTheme === "lightTheme" ?
      "darkTheme" :
      "lightTheme"

    setCurrentTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else if (prefersDark) {
      setCurrentTheme("darkTheme");
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <Banner onThemeSwitch={switchTheme} />
        <AppContainer>
          <TextInput />
        </AppContainer>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};
