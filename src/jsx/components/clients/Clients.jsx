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
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text={'Mis clientes'} btn_text="Crear cliente" />
                {error && <ClientError />}
            </Container>
            <Container cls={'container container--bg custom-fonts'}>
                <article className="clients-list">
                    {saveClients.map((client)=>{
                        const { _id, nombre, apellido, telefono, email } = client;
                        return <ClientsList  key={ _id } name={ nombre } last_name={ apellido } phone={ telefono } email={ email } />
                    })}
                </article>
            </Container>
        </>
    )
}

export { Clients }