import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./Buscador.css"
/* Tag Form en uso, no form de HTML */

// export const Buscador = () => {
  export const Buscador = () => {

const [nombre, setNombre] = useState("");
  const onInputChange = (e) => {
    setNombre(e.target.value);
  };
  
  return (
    <form action={`/buscar/${nombre}`}>
      <fieldset className="form-group">
        <input
          className="InputBuscador"
          type="text"
          placeholder="Buscar Pelicula"
          onChange={onInputChange}
          value={nombre}
        />
        <div className="icono">
          <Link to={"/buscar/" + nombre} className="lupa"><FontAwesomeIcon icon={faSearch} className="Icono" /></Link>{' '}
          </div>

      </fieldset>
    </form>
  );
};

//quitado provisoriamente
//<Button type="submit" className="lupa"><FontAwesomeIcon icon={faSearch} className="Icono" /></Button>

