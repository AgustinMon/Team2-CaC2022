import { useState } from "react";

/* Tag Form en uso, no form de HTML */

export const Buscador = () => {

    const [nombre, setNombre] = useState("");
    const onInputChange = (e) => {setNombre(e.target.value)};

    return (
        <form action={`/buscar/${nombre}`}>
        <fieldset>
        <input type="text" placeholder="Buscar Pelicula" onChange={onInputChange} value={nombre}/>
        <input type="submit" className="btn btn-primary" value="buscar" />
        </fieldset>
        </form>
    )
}

