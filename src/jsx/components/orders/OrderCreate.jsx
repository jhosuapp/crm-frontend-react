//Hooks react
import { useState } from "react";
//Global components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
//Components order
import { OrderClient } from './OrderClient';
import { OrderProduct } from './OrderProduct';
import { OrderMake } from './OrderMake';

const OrderCreate = ()=>{
    //States
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ products, setProducts ] = useState([]);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Crear pedido'} cls={'reverse'} btn_text={'volver'} btn_link={'/clientes'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>
                <OrderClient></OrderClient>
            </Container>
            <Container cls={'container container--bg custom-fonts order-product custom-input'}>
                <OrderProduct 
                    totalPrice={ totalPrice } 
                    setTotalPrice={ setTotalPrice } 
                    products={ products } 
                    setProducts={ setProducts }
                />                    
            </Container>
            <Container cls={'container container--bg custom-fonts order-make custom-input'}>
                <OrderMake totalPrice={ totalPrice } products={ products }></OrderMake>
            </Container>
        </>
    );
}

export { OrderCreate }