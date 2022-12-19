import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { IMAGE_URL, TIPO_PELICULA } from "../../Constants/constants";
import { LANGUAGES } from "../../Constants/languages";
import MainContext from "../../Context/MainContext";
import { Service } from "../../Services/Service";
import ModalFilm from "../ModalFilm/ModalFilm";
import './film.css';

export const Film = () => {

    const { movie_id } = useParams();
    const { language, typeFilm } = useContext(MainContext);
    const [data, setData] = useState({});
    const [show, toggleShow] = useState(false);

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
        {
            typeFilm == TIPO_PELICULA ? 
            <div
                className="film"
                style={{
                    backgroundImage: `url(${IMAGE_URL + data.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                <div className="film-data">
                    {data ? <h1>{data.title}</h1> : ''}
                    {data ? <p>{LANGUAGES[language].OTHER.RELEASE}: {data.release_date}</p> : ''}
                    {data ? <p>{LANGUAGES[language].OTHER.DURATION}: {data.runtime} min</p> : ''}

                    {data ? <p>{data.overview}</p> : ':('}
                    <button className="btn btn-danger"
                            onClick={() => toggleShow(true)}
                    >{LANGUAGES[language].OTHER.WATCH_NOW}</button>
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

            :
            
            <div>
                <div
                    className="film"
                    style={{
                        backgroundImage: `url(${IMAGE_URL + data.backdrop_path})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div className="film-data">
                        {data ? <h1>{data.name}</h1> : ''}
                        {data ? <p>{LANGUAGES[language].OTHER.RELEASE}: {data.first_air_date}</p> : ''}
                        {data ? <p>{LANGUAGES[language].OTHER.SEASONS}: {data.number_of_seasons}</p> : ''}
                        {data ? <p>{LANGUAGES[language].OTHER.EPISODES}: {data.number_of_episodes}</p> : ''}

                        {data ? <p>{data.overview}</p> : ''}

                        <button className="btn btn-danger"
                            onClick={() => toggleShow(true)}
                        >{LANGUAGES[language].OTHER.WATCH_NOW}</button>
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
            </div>
        }
        { data?.success == false && < Navigate to="/Error"></Navigate> }
        <ModalFilm show={show} toggleShow={toggleShow} idFilm={movie_id}></ModalFilm>
        </>
    )
}