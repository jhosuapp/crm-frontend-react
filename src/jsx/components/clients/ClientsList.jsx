import { ClientActions } from './ClientsActions';

const ClientsList = ({ _id, name, last_name, phone, email })=>{
    return(
        <div className="block" key={ _id }>
            <div className="item">
                <h4>{name}{last_name}</h4>
            </div>
            <div className="item">
                <p>{email}</p>
            </div>
            <div className="item">
                <p>{phone}</p>
            </div>
            <ClientActions />
        </div>
    )
}

export { ClientsList }