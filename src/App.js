import { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './assets/theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import { loaderContext, themeContext } from './contexts';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [language, setLanguage] = useState('en');

    const comprobarIdioma = () => {
        const browserLanguage = navigator.language || navigator.userLanguage;

        if (browserLanguage.includes('es')) {
            console.log('dentro del if');
            setLanguage('es');
        } else if (browserLanguage.includes('en')) {
            setLanguage('en');
        } else {
            setLanguage('other');
        }
    };

    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }

        comprobarIdioma();
    }, []);

    return (
        <BrowserRouter>
            <themeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
                <loaderContext.Provider value={{ isLoading, setIsLoading }}>
                    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                        <CssBaseline />
                        <Routes />
                    </ThemeProvider>
                </loaderContext.Provider>
            </themeContext.Provider>
        </BrowserRouter>
    );
}

export default App;
