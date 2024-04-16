//Axios
import { useEffect, useState } from "react";
import { baseAxios } from "../../config/Axios";
//Components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
import { OrderList } from "./OrderList";
const Order = ()=>{

    //State
    const [ saveOrders, setSaveOrders ] = useState([]);

    const request = async ()=>{
        const response = await baseAxios.get('/pedidos')
        return response.data;
    }

    useEffect(()=>{
        request()
            .then(res=>{
                setSaveOrders(res);
            }).catch(err=>{
                console.log(err);
            });
    }, []);


    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Mis Pedidos'}  btn_text="Asignar pedido" btn_link={'/clientes/'}/>
            </Container>
            <Container cls={'container container--bg custom-fonts order-list'}>
                <article>
                    {saveOrders.map((data, indice)=>(
                        <OrderList key={ data._id } indice={ indice } order={ data } />
                    ))}
                </article>
            </Container>
        </>
    )
}

export { Order }