import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ListaHorizontal.css";
import MainContext from "../../Context/MainContext";

export default function ListaHorizontal(props) {
  let { typeFilm, language, darkMode } = useContext(MainContext);

  const [data, setData] = useState([]);

  const buscarGenero = (id) => {
    return props.generos?.filter((genero) => genero.id === id)[0] || {};
  };

  useEffect(() => {
    (async () => {
      //devuelve el objeto con toda la informacion
      //dentro del cual results es un array de peliculas
      await props.getData(typeFilm, language).then((d) => {
        setData(d.results);
        if (process.env.REACT_APP_ISDEBUG) console.log("d", d.results);
      });
    })();
  }, [typeFilm]);

const fila = document.querySelector('#lista-' + props.id);

const moverDerecha = () => {
	fila.scrollLeft += fila.offsetWidth - 70;
};

const moverIzquierda = () => {
	fila.scrollLeft -= fila.offsetWidth - 70;
};

  return (
    <div className="contenedor_lista" darkmode = {`${darkMode}`}>
      <h3 className="titulo_lista" darkmode = {`${darkMode}`}>{props.tipo}</h3>
      <button role="button" id="flecha-izquierda" className="flecha-izquierda" onClick={moverIzquierda}>
        <i className="fas fa-angle-left"></i>
      </button>
      <div className="lista" id={"lista-" + props.id}>
        {data && data.length > 0
          ? data.map((element) => {
              let generos = [];
              element.genre_ids.map((id) =>
                generos.push(buscarGenero(id)?.name)
              );
              return <Card key={element.id} info={element} generos={generos} lista={props.id} />;
            })
          : null}
      </div>
      <button role="button" id="flecha-derecha" className="flecha-derecha" onClick={moverDerecha}>
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
}
