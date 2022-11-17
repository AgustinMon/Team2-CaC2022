import MainContext from './MainContext';
import React from "react";

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (e, dark2) => {
        let darkMode = !dark2;
        setDarkMode(darkMode);
        console.log('toggle to: ' + darkMode);
    }

    return (
        <MainContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </MainContext.Provider>
    )
}

export default ThemeProvider;