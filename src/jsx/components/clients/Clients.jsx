//Hooks react
import { useContext } from 'react';
//Component
import { Container } from '../global/Container';
import { Title } from '../global/Title';
//Client component
import { ClientsList } from './ClientsList';
import { ClientError } from './ClientError';
import { ClientHeader } from './ClientHeader';
//Context
import { ClientContext } from '../../context/ClientContext';

const Clients = ()=>{
    //Context
    const { saveClients, error } = useContext(ClientContext);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text={'Mis clientes'} btn_text="Crear cliente" />
            </Container>
            <Container cls={'container container--bg custom-fonts'}>
                <article className="clients-list">
                    <ClientHeader />
                    {saveClients.map((client)=>(
                        <ClientsList  key={ client._id } client={ client } />
                    ))}
                </article>
                {error && <ClientError />}
            </Container>
        </>
    )
}

export { Clients }