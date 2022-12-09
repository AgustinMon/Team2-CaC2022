import { useContext, useEffect } from "react";
import { useState } from "react";
import {IMAGE_URL} from "../../Constants/constants"
import MainContext from "../../Context/MainContext";
import { Service } from "../../Services/Service";
import {Link} from "react-router-dom";

import "./tarjetaGrande.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LANGUAGES } from "../../Constants/languages";

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
        },[typeFilm]
    )

    //reemplazar por llamada a una sola pelicula aleatoria



    return (
        <div className="tgrande"
            style={{ backgroundImage: `url(${IMAGE_URL + data.backdrop_path})`,
            backgroundSize: "cover" , 
            backgroundRepeat: "no-repeat"}}
        >
            <div className="tgrande-base">
                <div className="tgrande-desc">
                    <h1>{data.title? data.title : data.name}</h1>
                    <div className="rate_tg">
                        <FontAwesomeIcon icon={faStar} className="Icono" size="lg" style={{marginRight:'8px'}}/>
                        <h3>{data.vote_average}</h3>
                    </div>
                    <p>{data.overview}</p>
                </div>
            <Link to={"/View/"+data.id} className="btn btn-danger">{LANGUAGES[language].OTHER.WATCH_NOW}</Link>
            </div>
        </div>
    )
}

export default TarjetaGrande;