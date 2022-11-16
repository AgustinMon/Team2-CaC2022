import './sidebar.css';
import {CATEGORIAS} from '../../Constants/constants';
import {Buscador} from '../Buscador/Buscador';
import {Link} from "react-router-dom";

const Sidebar = (props) =>{

    return(
        <>
        <aside className="sidebar p-4">
        <Buscador/>
        <ul>
            {CATEGORIAS.map((elem, i) => <li key={i}><Link className="link-light" to={`/Category/${elem.id}`}>{elem.name}</Link></li>)}
        </ul>

        <div className='desc-grupo'>
        <p>Team 2 - CaC Reat - 2 cuat</p>
        <p>2022</p>
        </div>
        </aside>
        </>
    )
}
export default Sidebar