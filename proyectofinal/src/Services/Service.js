import { TIPO_PELICULA } from "../Constants/constants";

export class Service {
    
      /* example:
      https://api.themoviedb.org/3/movie/popular?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&language=es&page=1
      */
      static async getPopular(tipo, language) {
        let url = `${process.env.REACT_APP_BASE_PATH}/${tipo}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
        console.log(url);
        let data = {};
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }
    
      static async getTopRated(tipo, language) {
        let url = `${process.env.REACT_APP_BASE_PATH}/${tipo}/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
        console.log(url);
        let data = {};
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }

      static async getNowPlaying(tipo, language) {
        let now = 'on_the_air';
        if(tipo == TIPO_PELICULA) now = 'now_playing' 
        let url = `${process.env.REACT_APP_BASE_PATH}/${tipo}/${now}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
        console.log(url);
        let data = {};
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }

      //https://api.themoviedb.org/3/genre/movie/list?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxx&language=es-ES
      static async getGenres(tipo, language) { // tipo: movie || tv
        const url = `${process.env.REACT_APP_BASE_PATH}/genre/${tipo}/list?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
        let data = {};
        console.log(url);
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }
    
      static async getCategory(genre, tipo, language) { // recibe los generos como una lista de ids
        const url = `${process.env.REACT_APP_BASE_PATH}/discover/${tipo}?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre.join(",")}&language=${language}`;
        let data = {};
        console.log(url);
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }
    
      //https://api.themoviedb.org/3/movie/{movie_id}?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxx&language=en-US
      static async getById(id, tipo, language) {
    
        if (id == null) return null;
    
        const url = `${process.env.REACT_APP_BASE_PATH}/${tipo}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
        let data = {};
        console.log(url);
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }
    
      //https://api.themoviedb.org/3/search/movie?api_key=xxxxxxxxxxxxxxxx&language=es&query=ledge&page=1&include_adult=false
      static async getBySearch(word, tipo, language) {
    
        if (!word && word.length < 3) return null;
    
        const url = `${process.env.REACT_APP_BASE_PATH}/search/${tipo}?api_key=${process.env.REACT_APP_API_KEY}&query=${word}&include_adult=false&language=${language}`;
        let data = {};
        console.log(url);
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }

      // agrego provisorio porque da error Film.jsx
      static async getFilm(tipo, language, movie_id = null){
        if(movie_id!=null){
            //https://api.themoviedb.org/3/movie/{movie_id}?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxx&language=en-US
            const url = `${process.env.REACT_APP_BASE_PATH}/${tipo}/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
            let data = [];
            await fetch(url)
            .then((d)=>d.json())
            .then((d)=>data = d)
            .catch((error)=> console.log(error))
            return data
        }
      }

	  static async getVideos(idFilm, tipo, language) {
    
        if (idFilm == null) return null;
    
        const url = `${process.env.REACT_APP_BASE_PATH}/${tipo}/${idFilm}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
        let data = {};
        console.log(url);
        await fetch(url)
          .then((res) => res.json())
          .then((d) => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }
}