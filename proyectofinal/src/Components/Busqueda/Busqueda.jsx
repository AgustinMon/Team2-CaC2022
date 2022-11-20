import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Service } from '../../Services/Service';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import { MainContext } from "../../Context/MainContext";
import { useContext } from "react";

export const Busqueda = () => {

    const {palabra} = useParams();
    const {typeFilm, language} = useContext(MainContext);
    const [data, setData] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(
        ()=>{
            (
                async () =>{
                    await Service.getBySearch(palabra, typeFilm, language)
                    .then((d)=> {
                        if(process.env.ISDEBUG) console.log("data from busqueda", d);
                        setData(d.results)
                    })
                    .catch((error)=> console.log(error))
                }
            )()
        },[palabra]
    )

    const buscarGenero = (id) => {
        return generos?.filter((genero) => genero.id === id)[0] || {};
    };

    return (
        <>
        <Sidebar/>
        <h2>Resultados para: {palabra}</h2>
        
        <div className="contenedor-peliculas">
        {data?.map(element => {
            let generos = [];
            element.genre_ids.map((id) =>
              generos.push(buscarGenero(id)?.name)
            );

            return <Card key={element.id} info={element} generos={generos} lista={element.id} />})}
        </div>
        </>
    )
}