import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import {Service} from "../../Services/Service";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import TarjetaGrande from "../TarjetaGrande/TarjetaGrande";
import { Login } from "../LogIn/Login";

const Principal = () => {

    const [pagina, setPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(()=>{
        (async ()=> {
            //devuelve el objeto con toda la informacion
            //dentro del cual results es un array de peliculas
            await Service.getData(pagina)
            .then((d) => {
                setData(d.results)
                if (process.env.REACT_APP_ISDEBUG) console.log("d",d.results);
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
                <div className="container flex peliculas">
                {data && data.length>0 ? data.map(element => <Card key={element.id} info={element} /> ) : null}
                </div>
            </>
        }

        </>
    );
}

export default Principal;