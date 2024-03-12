import { ClientActions } from './ClientsActions';

const ClientsList = ({ client })=>{

    const { _id, nombre, apellido, telefono, email } = client;

    return(
        <div className="clients-list__body" key={ _id }>
            <div className="item">
                <p>{nombre} {apellido}</p>
            </div>
            <div className="item">
                <p>{email}</p>
            </div>
            <div className="item">
                <p>{telefono}</p>
            </div>
            <ClientActions id_client={_id} />
        </div>
    )
}

export { ClientsList }