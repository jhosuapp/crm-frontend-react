//React hooks
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//Icons
import iconEdit from '../../../assets/svg/icon-edit.svg';
//Delete client component
import { ClientDelete } from './ClientDelete';
//Global context
import { GlobalContext } from '../../context/GlobalContext';

const ClientActions = ( { id_client } )=>{
    //Get handle click
    const { handleClick } = useContext(GlobalContext);

    return(
        <>
            <Link to={`/clientes/editar/${id_client}`} onClick={()=>{ handleClick(); }} className="item">
                <img src={ iconEdit } alt="icon edit" />
            </Link>
            <ClientDelete id_client={ id_client } />
        </>
    );
}

export {  ClientActions } 