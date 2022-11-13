import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import {Service} from "../../Services/Service";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

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
                console.log("d",d.results);
            });
        })()
        },[]
    )

    return (
        <>
            <Sidebar/>
            <h2>Componente 1 - Pagina principal:</h2>
            <h3>Componente tarjeta grande pendiente</h3>
            <h3>Componente carrousel de tarjetas chicas pendiente</h3>
            <div className="container flex">
            {data.length>0 ? data.map(element => <Card info={element} /> ) : null}
            </div>
        </>
    );
}

export default Principal;