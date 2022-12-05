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

    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
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
