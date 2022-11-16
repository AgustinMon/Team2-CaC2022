import MainContext from './MainContext';
import React from "react";
import { TIPO_PELICULA } from '../Constants/constants';

const TypeFilmProvider = ({ children }) => {
    const [typeFilm, setTypeFilm] = React.useState(TIPO_PELICULA);

    const changeTypeFilm = (e, type) => {
        setTypeFilm(type);
        console.log('type film: ' + type);
    }

    return (
        <MainContext.Provider value={{ typeFilm, changeTypeFilm }}>
            {children}
        </MainContext.Provider>
    )
}

export default TypeFilmProvider;