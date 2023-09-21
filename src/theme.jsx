const themeDefault = {
    defaultColors: {
        primaryBG: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        secondary: 'hsl(220, 98%, 61%)' //Bright Blue
    }
};

const lightTheme = {
    ...themeDefault,
    colors: {
        primaryLight: 'hsl(0, 0%, 98%)', // Very Light Gray
        secondaryLight: 'hsl(236, 33%, 92%)', // Very Light Grayish Blue
        tertiaryLight: 'hsl(233, 11%, 84%)', // Light Grayish Blue
        quaternaryLight: 'hsl(236, 9%, 61%)', // Dark Grayish Blue
        quinaryLight: 'hsl(235, 19%, 35%)' // Very Dark Grayish Blue
    },
    background: {
        mobileBG: 'url(./../../public/images/bg-mobile-light.jpg)',
        desktopBG: 'url(./../../public/images/bg-desktop-light.jpg)'
    }

};

const darkTheme = {
    ...themeDefault,
    colors: {
        primaryDark: 'hsl(235, 21%, 11%)', // Very Dark Blue
        secondaryDark: 'hsl(235, 24%, 19%)', // Very Dark Desaturated Blue
        tertiaryDark: 'hsl(234, 39%, 85%)', // Light Grayish Blue
        tertiaryDarkHover: 'hsl(236, 33%, 92%)', // Light Grayish Blue (hover)
        quaternaryDark: 'hsl(234, 11%, 52%)', // Dark Grayish Blue
        quinaryDark: 'hsl(233, 14%, 35%)' // Very Dark Grayish Blue
    },
    background: {
        mobileBG: 'url(./../../public/images/bg-mobile-dark.jpg)',
        desktopBG: 'url(./../../public/images/bg-desktop-dark.jpg)'
    }
};

export default { lightTheme, darkTheme };