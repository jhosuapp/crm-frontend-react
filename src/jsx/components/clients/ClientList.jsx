import { ClientActions } from './ClientActions';

const ClientList = ({ client })=>{

    const { _id, nombre, apellido, telefono, email } = client;

    return(
        <div className="clients-list__body" key={ _id }>
            <div className="item">
                <p>Nombre:</p>
                <p>{nombre} {apellido}</p>
            </div>
            <div className="item">
                <p>Correo:</p>
                <p>{email}</p>
            </div>
            <div className="item">
                <p>Télefono:</p>
                <p>{telefono}</p>
            </div>
            <ClientActions id_client={_id} />
        </div>
    )
}

export { ClientList }