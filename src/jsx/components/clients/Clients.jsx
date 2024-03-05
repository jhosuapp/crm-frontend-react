//Hooks react
import { useContext } from 'react';
//Component
import { Container } from '../global/Container';
import { Title } from '../global/Title';
//Client component
import { ClientsList } from './ClientsList';
import { ClientError } from './ClientError';
//Context
import { ClientContext } from '../../context/ClientContext';

const Clients = ()=>{
    //Context
    const { saveClients, error } = useContext(ClientContext);

    return (
        <Container cls={'container custom-fonts'}>  
            <Title text={'Mis clientes'} />
            {saveClients.map((client)=>{
                const { _id, nombre, apellido, telefono, } = client;
                return <ClientsList  key={ _id } name={ nombre } last_name={ apellido } phone={telefono}  />
            })}
            {error && <ClientError />}
        </Container>
    )
}

export { Clients }