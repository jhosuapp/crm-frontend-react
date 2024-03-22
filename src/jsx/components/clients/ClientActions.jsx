import { Link } from 'react-router-dom';
//Icons
import iconEdit from '../../../assets/svg/icon-edit.svg';
//Delete client component
import { ClientDelete } from './ClientDelete';

const ClientActions = ( { id_client } )=>{

    return(
        <>
            <Link to={`/clientes/editar/${id_client}`} className="item">
                <img src={ iconEdit } alt="icon edit" />
            </Link>
            <ClientDelete id_client={ id_client } />
        </>
    );
}

export {  ClientActions } 