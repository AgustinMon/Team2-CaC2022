
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import "./modalusers.css";

const ModalUsers = () => {
    const { changeUser } = useContext(MainContext);
    const navigate = useNavigate();

    const logOut = (e) => {
        changeUser(e, null);
        navigate("/Login");
    };

    const gotoPerfiles = (e) => {
        navigate("/Perfiles");
    }

    return (
        <>
            <div className="popupUsers">
                <div className="accion">
                    <button onClick={gotoPerfiles}>Perfiles</button>
                </div>
                <div className="accion">
                    <button onClick={logOut}>LogOut</button>
                </div>
            </div>
        </>
    )
}

export default ModalUsers;