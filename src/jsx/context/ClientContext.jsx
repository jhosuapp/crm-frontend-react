//React hooks
import { useEffect, useState, createContext } from 'react';
//Axios
import { baseAxios } from '../config/Axios.jsx';

const ClientContext = createContext();


const ClientProvider = ({ children })=>{
    //States
    const [ saveClients, setSaveClients ] = useState([]);
    const [ error, setError ] = useState(false);
    //Request async
    const request = async ()=>{
        const requestClients = await baseAxios.get('/clientes');
        console.log(requestClients);
        setSaveClients(requestClients.data);
    }
    //Efect
    useEffect(()=>{
        request().catch((err)=>{
            setError(true);
        });
    }, []);

    return (
        <ClientContext.Provider value={ { saveClients, error } }>
            { children }
        </ClientContext.Provider>
    )
}

export { ClientContext, ClientProvider }