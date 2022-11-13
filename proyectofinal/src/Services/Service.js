import { APIKEY } from "../Constants/constants";
import { URL_BASE } from "../Constants/constants";

export class Service {
    
    /* example:
    https://api.themoviedb.org/3/movie/popular?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&language=es&page=1
    */
    static async getData(pagina = 1){
        const url = `${URL_BASE}movie/popular?api_key=${APIKEY}&page=${pagina}`;
        let data = {};
        await fetch(url)
        .then((res) => res.json())
        .then((d)=> data = d)
        .catch((err)=> console.log("error from service", err))
        return data
    }

    static async getGenres(){
        // por ahora se maneja con una constante
        //https://api.themoviedb.org/3/genre/movie/list?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxx&language=es-ES
    }

    static async getCategory(pagina = 1, genre = 1){
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${genre}&page=${pagina}`;
        let data = {};
        await fetch(url)
        .then((res) => res.json())
        .then((d)=> data = d)
        .catch((err)=> console.log(err))
        return data
    }

    static async getFilm(movie_id = null){
        if(movie_id!=null){
            //https://api.themoviedb.org/3/movie/{movie_id}?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxx&language=en-US
            const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}&language=en-US`;
            let data = [];
            await fetch(url)
            .then((d)=>d.json())
            .then((d)=>data = d)
            .catch((error)=> console.log(error))
            return data
        }
    }

    static async getBySearch(word = null){
        if (word && word.length > 3){
            //https://api.themoviedb.org/3/search/movie?api_key=xxxxxxxxxxxxxxxx&language=en-US&query=ledge&page=1&include_adult=false
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${word}&page=1&include_adult=false`;
            let data = [];
            await fetch(url)
            .then((data)=>data.json())
            .then((d)=> data = d)
            .catch((error)=>console.log(error));
            return data;
        }
    }

}