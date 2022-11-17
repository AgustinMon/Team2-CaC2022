import { createContext } from "react";

const defaultState = {
    darkMode: true,
    language: 'es',
    typeFilm: 'movie'
}

function getInitialState() {
    const currentState = localStorage.getItem('state');
    return currentState ? JSON.parse(currentState) : defaultState;
}

export const MainContext = createContext(getInitialState());