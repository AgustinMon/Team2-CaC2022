import './sidebar.css';
import {CATEGORIAS} from '../../Constants/constants';
import {Buscador} from '../Buscador/Buscador';

const Sidebar = (props) =>{

    return(
        <>
        <aside className="sidebar p-4">
        <h1>Sidebar</h1>
        <p>Buscar...</p>
        <Buscador/>
        <ul>
            {CATEGORIAS.map((elem, i) => <li key={i}><a className="link-light" href={`/Category/${elem.id}`}>{elem.name}</a></li>)}
        </ul>

        <p>Team 2 - CaC Reat - 2 cuat</p>
        <p>2022</p>
        </aside>
        </>
    )
}
export default Sidebar