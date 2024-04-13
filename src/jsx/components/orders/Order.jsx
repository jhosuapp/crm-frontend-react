//Axios
import { useEffect } from "react";
import { baseAxios } from "../../config/Axios";
//Components
import { Container } from "../global/Container";
import { Title } from "../global/Title";

const Order = ()=>{

    const request = async ()=>{
        const response = await baseAxios.get('/pedidos')
        return response.data;
    }

    useEffect(()=>{
        request()
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
    }, []);


    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Mis Pedidos'} />
            </Container>
            <Container>
                
            </Container>
        </>
    )
}

export { Order }