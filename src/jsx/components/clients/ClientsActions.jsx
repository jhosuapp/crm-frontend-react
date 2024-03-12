import { Link } from 'react-router-dom';
import iconDelete from '../../../assets/svg/icon-delete.svg';
import iconEdit from '../../../assets/svg/icon-edit.svg';

const ClientActions = ( { id_client } )=>{
    return(
        <>
            <Link to={`/clientes/editar/${id_client}`} className="item">
                <img src={ iconEdit } alt="icon edit" />
            </Link>
            <button className="item">
                <img src={ iconDelete } alt="icon delete" />
            </button>
        </>
    );
}

export {  ClientActions } 