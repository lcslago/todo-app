const themeDefault = {
    defaultColors: {
        primaryBG: 'linear-gradient(0.40turn, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        secondary: 'hsl(220, 98%, 61%)' //Bright Blue
    }
};

const lightTheme = {
    ...themeDefault,
    colors: {
        primary: 'hsl(236, 33%, 92%)', // Very Light Grayish Blue
        secondary: 'hsl(0, 0%, 98%)', // Very Light Gray
        tertiary: 'hsl(233, 11%, 84%)', // Light Grayish Blue
        quaternary: 'hsl(236, 9%, 61%)', // Dark Grayish Blue
        quinary: 'hsl(235, 19%, 35%)' // Very Dark Grayish Blue
    },
    background: {
        mobileBG: 'url(./../../public/images/bg-mobile-light.jpg)',
        desktopBG: 'url(./../../public/images/bg-desktop-light.jpg)'
    },
    icons: {
        toggleTheme: 'url(./src/assets/icons/icon-moon.svg)'
    }

};

const darkTheme = {
    ...themeDefault,
    colors: {
        primary: 'hsl(235, 21%, 11%)', // Very Dark Blue
        secondary: 'hsl(235, 24%, 19%)', // Very Dark Desaturated Blue
        tertiary: 'hsl(234, 11%, 52%)', // Dark Grayish Blue
        quaternary: 'hsl(235, 18%, 73%)', // Light Grayish Blue
        quinary: 'hsl(233, 14%, 35%)' // Very Dark Grayish Blue
    },
    background: {
        mobileBG: 'url(./../../public/images/bg-mobile-dark.jpg)',
        desktopBG: 'url(./../../public/images/bg-desktop-dark.jpg)'
    },
    icons: {
        toggleTheme: 'url(./src/assets/icons/icon-sun.svg)'
    }
};

export default { lightTheme, darkTheme };