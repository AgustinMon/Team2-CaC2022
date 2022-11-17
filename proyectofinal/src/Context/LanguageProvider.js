import MainContext from './MainContext';
import React from "react";
import { LANG_ES } from '../Constants/constants';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = React.useState(LANG_ES);

    const changeLanguage = (e, lang) => {
        setLanguage(lang);
        console.log('language: ' + lang);
    }

    return (
        <MainContext.Provider value={{ language, changeLanguage }}>
            {children}
        </MainContext.Provider>
    )
}

export default LanguageProvider;