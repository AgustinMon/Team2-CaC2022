import './notfound.css';
import { CATEGORIAS } from "../../Constants/constants";
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <>
            <div className="fondo">
                <div className="contenedor">
                    <h1>No encontramos lo que buscas :(</h1>
                    <h2>pero podes probar estas opciones</h2>
                        {CATEGORIAS.map((elem, i) => <span><Link className="link-light" to={`/Category/${elem.id}`}>{elem.name}</Link></span>)}
                </div>
            </div>
        </>
    )
}