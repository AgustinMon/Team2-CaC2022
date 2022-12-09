
import {Link} from "react-router-dom";
import "./modalusers.css";

const ModalUsers = () => {
    return (
        <>
        <div className="popupUsers">
            Hello
            <Link to="/Perfiles">Editar Perfil</Link>
            <Link to="/Logout">Logout</Link>
        </div>
        </>
    )
}

export default ModalUsers;