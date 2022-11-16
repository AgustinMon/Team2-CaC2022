import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ListaHorizontal.css";
import { MainContext } from "../../Context/MainContext";

export default function ListaHorizontal(props) {
  let { typeFilm, language } = useContext(MainContext);

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
  }, []);

const fila = document.querySelector('#lista-' + props.id);

const moverDerecha = () => {
	fila.scrollLeft += fila.offsetWidth;
};

const moverIzquierda = () => {
	fila.scrollLeft -= fila.offsetWidth;
};

  return (
    <div className="contenedor_lista">
      <h3 className="titulo_lista">{props.tipo}</h3>
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
              console.log(generos);
              return <Card key={element.id} info={element} generos={generos} />;
            })
          : null}
      </div>
      <button role="button" id="flecha-derecha" className="flecha-derecha" onClick={moverDerecha}>
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
}
