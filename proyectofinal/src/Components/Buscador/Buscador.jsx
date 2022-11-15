import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
      <fieldset class="form-group">
        <input
          className="InputBuscador"
          type="text"
          placeholder="Buscar Pelicula"
          onChange={onInputChange}
          value={nombre}
        />
        <Button type="submit" className="lupa"><FontAwesomeIcon icon={faSearch} className="Icono" /></Button>{' '}
      </fieldset>
    </form>
  );
};

