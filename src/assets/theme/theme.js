import { createTheme } from '@mui/material';
import typography from './typography';

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    navbarHeight: '70px',
    mobileNavbarHeight: '55px',
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                fontSize: '16px',
            },
            text: {
                letterSpacing: '2px',
                borderRadius: 0,
                '&:hover': {
                    color: 'rgb(230,230,230)',
                    backgroundColor: 'inherit',
                },
            },
        },
    },
};

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#0a192f',
        },
        primary: {
            main: '#64ffda',
            contrastText: '#fff',
        },
        secondary: {
            main: '#112240',
            contrastText: 'rgb(230,230,230)',
        },
        text: {
            primary: '#ccd6f6',
            secondary: '#8892b0',
        },
        action: {
            disabled: 'rgb(70,70,70)',
            disabledBackground: 'rgb(150,150,150)',
        },
    },
    backgroundSecondary: {
        bg: '#112240',
        text: 'rgb(230,230,230) ',
    },
    logoColor: '#64ffda',
    ...baseTheme,
});

const lightTheme = createTheme({
    palette: {
        background: {
            default: '#022C43',
        },
        primary: {
            main: '#FFD700',
            contrastText: '#F4F4F4',
        },
        secondary: {
            main: '#053F5E',
            contrastText: '#F4F4F4',
        },
        text: {
            primary: '#ccd6f6',
            secondary: '#8892b0',
        },
        action: {
            disabled: 'rgb(70,70,70)',
            disabledBackground: 'rgb(150,150,150)',
        },
    },
    backgroundSecondary: {
        bg: '#112240',
        text: '#F4F4F4',
    },
    logoColor: '#FFD700',
    ...baseTheme,
});

export { darkTheme, lightTheme };
