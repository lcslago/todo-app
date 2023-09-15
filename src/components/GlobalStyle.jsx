import { createGlobalStyle } from "styled-components";
import JosefinRegular from "./../assets/fonts/JosefinSans-Regular.ttf";
import JosefinBold from "./../assets/fonts/JosefinSans-Bold.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "JosefinSansRegular";
        src: local("Josefin Sans Regular"), local("JosefinSansRegular"), url(${JosefinRegular});
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "JosefinSansBold";
        src: local("Josefin Sans Bold"), local("JosefinSansBold"), url(${JosefinBold});
        font-weight: bold;
        font-style: normal;
    }

    html,
    ::placeholder {
        font-family: 'JosefinSansRegular';
    }

    b{
        font-family: 'JosefinSansBold';
    }
`

export default GlobalStyle;