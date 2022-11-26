import MainContext from './MainContext';
import React from "react";
import { LANG_ES, TIPO_PELICULA } from '../Constants/constants';

const MainProvider = ({ children }) => {
    const [language, setLanguage] = React.useState(LANG_ES);
    const [darkMode, setDarkMode] = React.useState(false);
    const [typeFilm, setTypeFilm] = React.useState(TIPO_PELICULA);

    const currentState = JSON.parse(localStorage.getItem('state'));

    const saveStorage = () => localStorage.setItem('state', JSON.stringify(currentState));

    const changeLanguage = (e, lang) => {
        setLanguage(lang);
        currentState.language = lang;
        console.log('language: ' + lang);
        saveStorage();
    }

    const toggleDarkMode = (e, dark2) => {
        let darkMode = !dark2;
        setDarkMode(darkMode);
        currentState.darkMode = darkMode;
        console.log('dark mode: ' + darkMode);

        saveStorage();
    }

    const changeTypeFilm = (e, type) => {
        setTypeFilm(type);
        currentState.typeFilm = type;
        console.log('type film: ' + type);
        saveStorage();
    }

    return (
        <MainContext.Provider value={{ language, changeLanguage, darkMode, toggleDarkMode, typeFilm, changeTypeFilm }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;