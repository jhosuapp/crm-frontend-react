//React hooks
import { useEffect, useState, createContext } from 'react';
//Axios
import { baseAxios } from '../config/Axios.jsx';

const ClientContext = createContext();


const ClientProvider = ({ children })=>{
    //States
    const [ saveClients, setSaveClients ] = useState([]);
    //Request async
    const request = async ()=>{
        const requestClients = await baseAxios.get('/clientes');
        setSaveClients(requestClients.data);
    }
    //Efect
    useEffect(()=>{
        request();
    }, []);

    return (
        <ClientContext.Provider value={ { saveClients } }>
            { children }
        </ClientContext.Provider>
    )
}

export { ClientContext, ClientProvider }