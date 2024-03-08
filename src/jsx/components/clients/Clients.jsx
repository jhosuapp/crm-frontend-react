//Hooks react
import { useContext } from 'react';
//Component
import { Container } from '../global/Container';
import { Title } from '../global/Title';
//Client component
import { ClientsList } from './ClientsList';
import { ClientError } from './ClientError';
import { ClientHeader } from './ClientHeader';
import { ClientFilter } from './ClientFilter';
//Context
import { ClientContext } from '../../context/ClientContext';

const Clients = ()=>{
    //Context
    const { filterState, saveClients, error } = useContext(ClientContext);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Mis clientes'} btn_text="Crear cliente" btn_link={'/clientes/crear'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>
                {saveClients.length > 0 && <ClientFilter />}
                <article className="clients-list">
                    { filterState.length > 0 && <ClientHeader />}
                    {filterState.map((client)=>(
                        <ClientsList  key={ client._id } client={ client } />
                    ))}
                </article>
                {error && <ClientError />}
            </Container>
        </>
    )
}

export { Clients }