import { createContext } from "react";
import { LANG_ES, TIPO_PELICULA } from "../Constants/constants";

const defaultState = {
    darkMode: true,
    language: LANG_ES,
    typeFilm: TIPO_PELICULA
}

function getInitialState() {
    //buscar variable state en el localstorage
    //la variable state contiene un json con el mismo formato que defaultstate
    const currentState = localStorage.getItem('state');
    let data = null;
    console.log(currentState);
    //antes de return, se podria grabar un state si no existe
    //no olvidar JSON.stringify() para guardar en state
    if (currentState == null) {
        localStorage.setItem('state', JSON.stringify(defaultState)) 
    }

    data = currentState ?  JSON.parse(currentState) : defaultState;
    return data;
}

const MainContext = createContext(getInitialState());

export default MainContext;