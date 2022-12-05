import './sidebar.css';
import { CATEGORIAS } from '../../Constants/constants';
import { Buscador } from '../Buscador/Buscador';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import MainContext from "../../Context/MainContext";

const Sidebar = (props) => {

    let { darkMode } = useContext(MainContext);

console.log("darkmode", darkMode);

    return (
        <>
            <aside darkmode ={`${darkMode}`} className="sidebar p-4">
                <Buscador />
                <ul>
                    {props.generos.map((elem, i) => <li key={i}><Link className="link-light" to={`/Category/${elem.id}`}>{elem.name}</Link></li>)}
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