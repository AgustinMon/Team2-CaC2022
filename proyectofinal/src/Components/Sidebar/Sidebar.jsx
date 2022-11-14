import './sidebar.css';
import {CATEGORIAS} from '../../Constants/constants';
import {Buscador} from '../Buscador/Buscador';
import {Link} from "react-router-dom";

const Sidebar = (props) =>{

    return(
        <>
        <aside className="sidebar p-4">
        <h1>Sidebar</h1>
        <p>Buscar...</p>
        <Buscador/>
        <ul>
            {CATEGORIAS.map((elem, i) => <li key={i}><Link className="link-light" to={`/Category/${elem.id}`}>{elem.name}</Link></li>)}
        </ul>

        <p>Team 2 - CaC Reat - 2 cuat</p>
        <p>2022</p>
        </aside>
        </>
    )
}
export default Sidebar