import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Buscador.css"
/* Tag Form en uso, no form de HTML */

export const Buscador = () => {
  const [nombre, setNombre] = useState("");
  const onInputChange = (e) => {
    setNombre(e.target.value);
  };

  return (
    <form action={`/buscar/${nombre}`}>
      <fieldset class="form-group">
        <FontAwesomeIcon icon={faSearch} className="Icono" />
        <input
          className="InputBuscador"
          type="text"
          placeholder="Buscar Pelicula"
          onChange={onInputChange}
          value={nombre}
        />
        <input type="submit" className="btn btn-primary" value="buscar" />
      </fieldset>
    </form>
  );
};
