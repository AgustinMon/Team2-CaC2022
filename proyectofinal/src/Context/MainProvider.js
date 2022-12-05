import MainContext from './MainContext';
import React from "react";
import { LANG_ES, TIPO_PELICULA } from '../Constants/constants';

const MainProvider = ({ children }) => {
    const [language, setLanguage] = React.useState(LANG_ES);
    const [darkMode, setDarkMode] = React.useState(true);
    const [typeFilm, setTypeFilm] = React.useState(TIPO_PELICULA);
    const [user, setUser] = React.useState(null);

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

    const changeUser = (e, user) => {
        setUser(user);
        currentState.user = user;
        console.log('user: ', user);
        saveStorage();
    }

    return (
        <MainContext.Provider value={{ language, changeLanguage, darkMode, toggleDarkMode, typeFilm, changeTypeFilm, user, changeUser, setDarkMode }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;