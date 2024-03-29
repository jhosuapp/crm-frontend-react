import { baseAxios } from '../../config/Axios.jsx';
import { useState, useEffect, useContext } from 'react';
//Global components
import { RemoveAccents } from '../../components/global/RemoveAccents.jsx';
//Component
import { Container } from '../global/Container';
import { Title } from '../global/Title';
//Client component
import { ClientList } from './ClientList';
import { ClientError } from './ClientError';
import { ClientHeader } from './ClientHeader';
import { ClientFilter } from './ClientFilter';
import { GlobalContext } from '../../context/GlobalContext.jsx';
//Context

const Client = ()=>{
    const { globalDelete } = useContext(GlobalContext);
    //States
    const [ saveClients, setSaveClients ] = useState([]);
    const [ filterState, setFilterState ] = useState(saveClients);
    const [ error, setError ] = useState(false);
    const [ value, setValue ] = useState('');
    //Request async
    const request = async ()=>{
        const requestClients = await baseAxios.get('/clientes');
        setSaveClients(requestClients.data);
    }
    //Filter clients
    const filterClients = ()=>{
        const clients = [...saveClients];
        //create regular expresion and filter
        const valueExp = RegExp(RemoveAccents(value.toLowerCase()));
        const filter = clients.filter((item) => {
            return valueExp.test(RemoveAccents(item.nombre.toLowerCase())) || 
            valueExp.test(RemoveAccents(item.email.toLowerCase())) ||
            valueExp.test(RemoveAccents(item.telefono.toLowerCase()));
        });
        //Update state
        setFilterState(filter);
    }
    //Only when value change and clients are render
    useEffect(()=>{
        filterClients();
    },[ value, saveClients ]);
    //Only when endpoint has error
    useEffect(()=>{
        request().catch((err)=>{
            setError(true);
        });
    }, [ globalDelete ]);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Mis clientes'} btn_text="Crear cliente" btn_link={'/clientes/crear'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>
                {saveClients.length > 0 && <ClientFilter filter={ filterState } setValue={ setValue }/>}
                {saveClients.length == 0 && !error && <ClientError text={"Usted no cuenta con clientes actualmente, crea un nuevo cliente para continuar"} cls={'secondary'} />}
                <article className="clients-list">
                    { filterState.length > 0 && <ClientHeader />}
                    { filterState.map((client)=>(
                        <ClientList  key={ client._id } client={ client } />
                    )) }
                </article>
                {error && <ClientError text={"Ha ocurrido un error inesperado al cargar tus clientes"}/>}
            </Container>
        </>
    )
}

export { Client }