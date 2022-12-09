import './sidebar.css';
import { useContext, useCallback } from 'react';
import { CATEGORIAS } from '../../Constants/constants';
import { Buscador } from '../Buscador/Buscador';
import { Link } from "react-router-dom";
import MainContext from "../../Context/MainContext";
import { LANGUAGES } from '../../Constants/languages';

const Sidebar = (props) => {

    const { darkMode, language } = useContext(MainContext);
    return (
        <>
            <aside darkmode ={`${darkMode}`} className="sidebar p-4">
                {/* <Buscador /> */}
                <h3 className='align-center'>{LANGUAGES[language].OTHER.GENRES}</h3>
                <ul className='lista_categorias'>
                    {props.generos.map((elem, i) => <Link className="link-light" key={i} to={`/Category/${elem.id}`}><li>{elem.name}</li></Link>)}
                </ul>

                <div className='desc-grupo align-center'>
                    <p>Team 2 - CaC Reat - 2 cuat</p>
                    <p>2022</p>
                </div>
            </aside>
        </>
    )
}
export default Sidebar