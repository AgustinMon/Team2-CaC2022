import './sidebar.css';
import { useContext, useCallback } from 'react';
import { CATEGORIAS } from '../../Constants/constants';
import { Buscador } from '../Buscador/Buscador';
import { Link } from "react-router-dom";
import MainContext from "../../Context/MainContext";

const Sidebar = (props) => {

    const { darkMode, toggleDarkMode } = useContext(MainContext);
    return (
        <>
            <aside darkmode ={`${darkMode}`} className="sidebar p-4">
                <Buscador />
                <ul>
                    {props.generos.map((elem, i) => <li key={i}><Link className="link-light" to={`/Category/${elem.id}`}>{elem.name}</Link></li>)}
                </ul>
                    <input type="checkbox" onClick={(e)=> toggleDarkMode(e, darkMode)}/>Cambiar modo

                <div className='desc-grupo'>
                    <p>Team 2 - CaC Reat - 2 cuat</p>
                    <p>2022</p>
                </div>
            </aside>
        </>
    )
}
export default Sidebar