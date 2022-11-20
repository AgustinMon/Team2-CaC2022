import { createContext } from "react";

const defaultState = {
    darkMode: true,
    language: 'es',
    typeFilm: 'movie'
}

function getInitialState() {
    //buscar variable state en el localstorage
    //la variable state contiene un json con el mismo formato que defaultstate
    const currentState = localStorage.getItem('state');
    //antes de return, se podria grabar un state si no existe
    //no olvidar JSON.stringify() para guardar en state
    if (currentState == null) {
        localStorage.setItem('state', JSON.stringify(defaultState)) 
    }

    return currentState ?  JSON.parse(currentState) : defaultState;
}
export const MainContext = createContext(getInitialState());