import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {IMAGE_URL} from "../../Constants/constants";
import { Service } from "../../Services/Service";

export const Film = () => {

    const {movie_id} = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
                await Service.getFilm(movie_id)
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
            <img src={IMAGE_URL + data.poster_path} alt="{data.title}"/>
            {data? <h1>{data.title}</h1> : <p>No film was found...</p>}
            {data? <p>{data.release_date}</p> : ''}
            {data? <p>{data.tagline}</p> : ''}
            {data? <p>{data.runtime} minutos</p> : ''}
           
            {data? <p>{data.overview}</p>: ':('}
            <button className="btn btn-danger">Comenzar a ver</button>
        </>
    )
}