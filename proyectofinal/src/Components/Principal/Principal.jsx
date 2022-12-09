import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {Service} from "../../Services/Service";
import { useState } from "react";
import { useEffect } from "react";
import TarjetaGrande from "../TarjetaGrande/TarjetaGrande";
import { Login } from "../LogIn/Login";
import ListaHorizontal from "../ListaHorizontal/ListaHorizontal";
import MainContext from "../../Context/MainContext";
import Idioma from "../Idioma/Idioma";
import { LANGUAGES } from "../../Constants/languages";

const Principal = () => {

    let { typeFilm, language, darkMode } = useContext(MainContext);
    const [generos, setGeneros] = useState([]);

    useEffect(()=>{
        (async ()=> {
            //devuelve el objeto con toda la informacion
            //dentro del cual results es un array de peliculas
            await Service.getGenres(typeFilm, language)
            .then((d) => {
                setGeneros(d.genres)
                if (process.env.REACT_APP_ISDEBUG) console.log("d",d.genres);
            });
        })()
        },[typeFilm, language]
    )

    return (
        <div className="contenedor_body">
        {!process.env.REACT_APP_ISDEBUG 
            ? <Login/>
            : <>
                <Sidebar generos={generos}/>
                <div style={{width: '85%'}}>
                    <TarjetaGrande/>
                    <ListaHorizontal
                        id="1"
                        tipo={LANGUAGES[language].LISTS.POPULAR}
                        getData={Service.getPopular}
                        generos={generos}></ListaHorizontal>
                    <ListaHorizontal
                        id="2"
                        tipo={LANGUAGES[language].LISTS.TOP}
                        getData={Service.getTopRated}
                        generos={generos}></ListaHorizontal>
                    <ListaHorizontal
                        id="3"
                        tipo={LANGUAGES[language].LISTS.RECENT}
                        getData={Service.getNowPlaying}
                        generos={generos}></ListaHorizontal>
                </div>
            </>
        }
        </div>
    );
}

export default Principal;