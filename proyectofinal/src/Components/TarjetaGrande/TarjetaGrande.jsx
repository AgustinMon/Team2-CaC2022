import { useContext, useEffect } from "react";
import { useState } from "react";
import {IMAGE_URL} from "../../Constants/constants"
import { MainContext } from "../../Context/MainContext";
import { Service } from "../../Services/Service";
import {Link} from "react-router-dom";

import "./tarjetaGrande.css";

const TarjetaGrande = () => {

    let { typeFilm, language } = useContext(MainContext);
    const [data, setData] = useState([]);
    
    useEffect(
        ()=>{
            (async ()=>{
                await Service.getPopular(typeFilm, language)
                .then((d)=> setData(d.results[0]))
                .catch((error) => console.log(error))
            })()
        },[]
    )

    //reemplazar por llamada a una sola pelicula aleatoria



    return (
        <div className="tgrande"
            style={{ backgroundImage: `url(${IMAGE_URL + data.backdrop_path})`,
            backgroundSize: "cover" , 
            backgroundRepeat: "no-repeat"}}
        >
            <div className="tgrande-desc">
                <h1>{data.title}</h1>
                <h3>{data.vote_average}</h3>
                <p>{data.overview}</p>
            </div>
            <Link to={"/View/"+data.id} className="btn btn-danger">Ver Ahora</Link>
        </div>
    )
}

export default TarjetaGrande;