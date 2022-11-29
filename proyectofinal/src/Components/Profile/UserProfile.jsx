import addElement from "../../Services/Firestore";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";



export const UserProfile = () => {

    const { user} = useContext(MainContext);

    return (
        <>
        <h1>Preferencias de Usuario</h1>
        <button onClick={addElement(user)}> agregar usuario </button>
        </>
    )
}