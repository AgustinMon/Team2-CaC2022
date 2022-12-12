import '../LogIn/login.css';
import './notfound.css';
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import { LANGUAGES } from "../../Constants/languages";
import { Link } from 'react-router-dom';

export const NotFound = () => {
    const { language } = useContext(MainContext);

    return (
        <>
            <div className="fondo">
                <div className='degrade'>
                    <div className="notfound_contenedor">
                        <div className='notfound_desc'>
                            <h1>{LANGUAGES[language].NOTFOUND.TITLE}</h1>
                            <h3 className='mt-4'>{LANGUAGES[language].NOTFOUND.SUBTITLE}</h3>
                        </div>
                        <Link className="notfound_home" to="/Home" activeClassname>
                            {LANGUAGES[language].NAVBAR.HOME}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}