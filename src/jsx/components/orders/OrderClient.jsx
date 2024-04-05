//Hooks react
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//Axios
import { baseAxios } from "../../config/Axios";

const OrderClient = ()=>{
    //Param url
    const { id } = useParams();
    //States
    const [ dataClient, setDataClient ] = useState('');
    //Request
    const request = async ()=>{
        const response = await baseAxios.get(`/clientes/${id}`)
        return response.data;
    }
    useEffect(()=>{
        request().then((res)=>{
            setDataClient(res);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return (
        <>
            <h3>Datos de cliente</h3>
            <article className="order-client">
                <div className="item">
                    <p>Nombre:</p>
                    <p>{ `${dataClient.nombre} ${dataClient.apellido}` }</p>
                </div>
                <div className="item">
                    <p>Télefono:</p>
                    <p>{ dataClient.telefono }</p>
                </div>
                <div className="item">
                    <p>Correo:</p>
                    <p>{ dataClient.email }</p>
                </div>
            </article>
        </>
    )
}

export { OrderClient }