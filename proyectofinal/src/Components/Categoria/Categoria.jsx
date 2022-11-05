import Sidebar from "../Sidebar/Sidebar"
import { useParams } from "react-router-dom"

export const Categoria = () => {

    const {Catid} = useParams();

    return (
        <>
        <Sidebar/>
        <h2>Componente 2 - Pagina de Categoria:</h2>
        <h1>{Catid}</h1> 
        <p>Aca se deben mostrar tarjetas con peliculas de la categoria {Catid} </p>
        </>
        
    )
}