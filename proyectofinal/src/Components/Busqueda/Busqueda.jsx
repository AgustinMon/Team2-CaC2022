import {useParams} from 'react-router-dom';

export const Busqueda = () => {

    const {palabra} = useParams();

    return (
        <h2>Usted ha buscado: {palabra}</h2>
    )
}