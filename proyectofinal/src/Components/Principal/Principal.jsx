import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {Service} from "../../Services/Service";
import { useState } from "react";
import { useEffect } from "react";
import TarjetaGrande from "../TarjetaGrande/TarjetaGrande";
import { Login } from "../LogIn/Login";
import ListaHorizontal from "../ListaHorizontal/ListaHorizontal";
import { MainContext } from "../../Context/MainContext";

const Principal = () => {

    let { typeFilm, language } = useContext(MainContext);
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
        },[]
    )

    return (
        <>
        {!process.env.REACT_APP_ISDEBUG 
            ? <Login/>
            : <>
                <Sidebar/>
                <TarjetaGrande/>
                <ListaHorizontal
                    id="1"
                    tipo="Populares"
                    getData={Service.getPopular}
                    generos={generos}></ListaHorizontal>
                <ListaHorizontal
                    id="2"
                    tipo="Top más votados"
                    getData={Service.getTopRated}
                    generos={generos}></ListaHorizontal>
                <ListaHorizontal
                    id="3"
                    tipo="Actualmente"
                    getData={Service.getNowPlaying}
                    generos={generos}></ListaHorizontal>
            </>
        }

        </>
    );
}

export default Principal;