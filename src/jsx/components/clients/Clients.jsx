//React hooks
import { useEffect, useState } from 'react';
//Axios
import { baseAxios } from '../../config/Axios';
//Component
import { Container } from '../global/Container';
import { Title } from '../global/Title';
//Client component
import { ClientsList } from './ClientsList';

const Clients = ()=>{
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
        <Container cls={'container custom-fonts'}>  
            <Title text={'Mis clientes'} />
            {saveClients.map((client)=>{
                const { _id, nombre, apellido, telefono, } = client;
                return <ClientsList  name={ nombre } last_name={ apellido } phone={telefono}  />
            })}
        </Container>
    )
}

export { Clients }