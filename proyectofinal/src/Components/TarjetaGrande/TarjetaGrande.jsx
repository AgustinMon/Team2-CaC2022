import { useEffect } from "react";
import { useState } from "react";
import {IMAGE_URL} from "../../Constants/constants"
import { Service } from "../../Services/Service";
import "./tarjetaGrande.css";

const TarjetaGrande = () => {

    const [data, setData] = useState([]);
    
    useEffect(
        ()=>{
            (async ()=>{
                await Service.getData(1)
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
            <h1>{data.title}</h1>
            <h3>{data.vote_average}</h3>
            <p>{data.overview}</p>
            <button className="btn btn-danger">Ver Ahora</button>
        </div>
    )
}

export default TarjetaGrande;