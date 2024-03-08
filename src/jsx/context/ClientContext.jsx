//React hooks
import { useEffect, useState, createContext } from 'react';
//Axios
import { baseAxios } from '../config/Axios.jsx';
//Global components
import { RemoveAccents } from '../components/global/RemoveAccents.jsx';

const ClientContext = createContext();


const ClientProvider = ({ children })=>{
    //States
    const [ saveClients, setSaveClients ] = useState([]);
    const [ filterState, setFilterState ] = useState(saveClients);
    const [ error, setError ] = useState(false);
    const [ value, setValue ] = useState('');
    //Request async
    const request = async ()=>{
        const requestClients = await baseAxios.get('/clientes');
        setSaveClients(requestClients.data);
        console.log(requestClients);
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
    }, []);

    return (
        <ClientContext.Provider value={ { saveClients, error, setValue, filterState } }>
            { children }
        </ClientContext.Provider>
    )
}

export { ClientContext, ClientProvider }