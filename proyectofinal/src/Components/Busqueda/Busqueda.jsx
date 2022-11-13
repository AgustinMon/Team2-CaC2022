import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Service } from '../../Services/Service';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';

export const Busqueda = () => {

    const {palabra} = useParams();

    const [data, setData] = useState([]);

    useEffect(
        ()=>{
            (
                async () =>{
                    await Service.getBySearch(palabra)
                    .then((d)=> {
                        if(process.env.ISDEBUG) console.log("data from busqueda", d);
                        setData(d.results)
                    })
                    .catch((error)=> console.log(error))
                }
            )()
        },[]
    )

    return (
        <>
        <Sidebar/>
        <h2>Resultados para: {palabra}</h2>
        {data && data.length>0 ? data.map((element)=> <Card info={element}/>) : <h2>No se encontró nada con este nombre...</h2>}
        </>
    )
}