import { ClientActions } from './ClientsActions';

const ClientsList = ({ client })=>{

    const { _id, nombre, apellido, telefono, email } = client;

    return(
        <div className="block" key={ _id }>
            <div className="item">
                <h4>{nombre}{apellido}</h4>
            </div>
            <div className="item">
                <p>{email}</p>
            </div>
            <div className="item">
                <p>{telefono}</p>
            </div>
            <ClientActions />
        </div>
    )
}

export { ClientsList }