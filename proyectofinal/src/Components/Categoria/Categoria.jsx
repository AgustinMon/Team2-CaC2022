import Sidebar from "../Sidebar/Sidebar"
import { useParams } from "react-router-dom"
import { CATEGORIAS } from "../../Constants/constants";
import { useState } from "react";
import { useEffect } from "react";
import {Service} from '../../Services/Service';
import Card from "../Card/Card";

export const Categoria = () => {

    const {Catid} = useParams();

    const [data, setData] = useState([]);

    useEffect(()=>{
        (async ()=>{
            Service.getCategory(1, Catid)
            .then((response)=>{
                setData(response.results);
                console.log("results from category", response.results);
            })
            .then(()=>console.log("data from categories", data))
            .catch((error)=>{console.log("error from categories", error)})
        })()
    },[])

    return (
        <>
        <Sidebar/>
        <h2>Componente 2 - Pagina de Categoria:</h2>
        <h1>{Catid}</h1> 
        <p>Categoria: {Catid} </p>
        {data.length>0 ? data.map(element => <Card info={element} /> ) : null}
        </>
        
    )
}