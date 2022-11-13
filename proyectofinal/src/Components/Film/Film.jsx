import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
            {data? <h1>{data.title}</h1> : <p>No film was found...</p>}
            {data? <p>{data.overview}</p>: <p>No film was found...</p>}
        </>
    )
}