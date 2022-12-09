import Sidebar from "../Sidebar/Sidebar"
import { useParams } from "react-router-dom"
import './Categoria.css'
import { useContext, useState } from "react";
import { useEffect } from "react";
import {Service} from '../../Services/Service';
import Card from "../Card/Card";
import MainContext from "../../Context/MainContext";

export const Categoria = () => {
    let { typeFilm, language, darkMode } = useContext(MainContext);
    const {Catid} = useParams();

    const [data, setData] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(()=>{
        (async ()=>{
            Service.getCategory([Catid], typeFilm, language)
            .then((response)=>{
                setData(response.results);
                console.log("results from category", response.results);
            })
            .catch((error)=>{console.log("error from category", error)})

            Service.getGenres(typeFilm, language)
            .then((response)=>{
                setGeneros(response.genres);
                console.log("results from generos", response.genres);
            })
            .catch((error)=>{console.log("error from generos", error)})
        })()
    },[Catid, typeFilm, language])

    const buscarGenero = (id) => {
        return generos?.filter((genero) => genero.id === id)[0] || {};
    };

    return (
        <div className="contenedor_categoria contenedor_body">
            <Sidebar generos={generos}/>
            <div style={{margin: '20px', width: '85%'}}>
                {/* {process.env.ISDEBUG? <h2>Componente 2 - Pagina de Categoria: {Catid}</h2> : ''} */}
                {generos?.map((element)=> element.id == Catid? <h1 className="letras">{element.name}</h1> : '')}
                <div className="contenedor-peliculas">
                {data?.map(element => {
                    let generos = [];
                    element.genre_ids.map((id) =>
                    generos.push(buscarGenero(id)?.name)
                    );

                    return <Card key={element.id} info={element} generos={generos} lista={element.id} />})}
                </div>
            </div>
        </div>
    )
}