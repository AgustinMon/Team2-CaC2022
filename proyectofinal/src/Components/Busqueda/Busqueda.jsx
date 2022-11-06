import {useParams} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

export const Busqueda = () => {

    const {palabra} = useParams();

    return (
        <>
        <Sidebar/>
        <h2>Resultados para: {palabra}</h2>
        </>
    )
}