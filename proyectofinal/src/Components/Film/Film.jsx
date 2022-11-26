import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../Constants/constants";
import MainContext from "../../Context/MainContext";
import { Service } from "../../Services/Service";
import './film.css';

export const Film = () => {

    const { movie_id } = useParams();
    const { language, typeFilm } = useContext(MainContext);
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            await Service.getFilm(typeFilm, language, movie_id)
                .then((obj) => {
                    setData(obj);
                    console.log("data from film", obj)
                })
                .catch((error) => console.log(error))
        }
        )()
    }, [])

    return (
        <>
        <div
            className="film"
            style={{
                backgroundImage: `url(${IMAGE_URL + data.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
            <div className="film-data">
            {data ? <h1>{data.title}</h1> : <p>No film was found...</p>}
            {data ? <p>Lanzamiento: {data.release_date}</p> : ''}
            {data ? <p>Tags: {data.tagline}</p> : ''}
            {data ? <p>Duración: {data.runtime} minutos</p> : ''}

            {data ? <p>{data.overview}</p> : ':('}
            <button className="btn btn-danger">Comenzar a ver</button>
            </div>
            <div className="poster" 
                style={{ backgroundImage: `url(${IMAGE_URL + data.poster_path})`,
                backgroundSize: "cover" , 
                backgroundRepeat: "no-repeat"}}>
            </div>
            {
                data.production_companies && data.production_companies.length && data.production_companies[0].logo_path!="null" > 0 ?
                <img className="company" 
                src= {IMAGE_URL + data.production_companies[0].logo_path}>
                </img>
                :
                <span></span>
            }


        </div>
        </>
    )
}