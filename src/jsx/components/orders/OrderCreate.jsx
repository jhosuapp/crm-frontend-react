//Global components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
//Components order
import { OrderClient } from './OrderClient';
import { OrderProduct } from './OrderProduct';

const OrderCreate = ()=>{
    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Crear pedido'} cls={'reverse'} btn_text={'volver'} btn_link={'/'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>
                <OrderClient></OrderClient>
            </Container>
            <Container cls={'container container--bg custom-fonts order-product custom-input'}>
                <OrderProduct></OrderProduct>
            </Container>
        </>
    );
}

export { OrderCreate }