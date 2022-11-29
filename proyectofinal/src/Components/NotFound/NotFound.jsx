import '../LogIn/login.css';
import './notfound.css';
import { CATEGORIAS } from "../../Constants/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import { LANGUAGES } from "../../Constants/languages";

export const NotFound = () => {
    const { language, user, changeUser } = useContext(MainContext);

    return (
        <>
            <div className="fondo">
                <div className="contenedor">
                    <h1>{LANGUAGES[language].NOTFOUND.TITLE}</h1>
                    <h1>:(</h1>
                    <h2 className='mt-4'>... {LANGUAGES[language].NOTFOUND.SUBTITLE}:</h2>
                    <hr />
                    <ul className='notfound-list mt-4'>
                        {CATEGORIAS.map((elem, i) => <li key={elem.id}><Link className="link-light" to={`/Category/${elem.id}`}>{elem.name}</Link></li>)}
                    </ul>
                    <hr />
                    <small>{LANGUAGES[language].LOGIN.TITLE}</small>
                </div>
            </div>
        </>
    )
}