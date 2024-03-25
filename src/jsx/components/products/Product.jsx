//Hooks react
import { useContext, useEffect, useState } from "react";
//Global components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
//Context
import { GlobalContext } from "../../context/GlobalContext";
//Axios
import { baseAxios } from "../../config/Axios";

const Product = ()=>{
    //Global context && states
    const { globalDelete, setGlobalDelete } = useContext(GlobalContext);
    const [ stateProducts, setStateProducts, globalError, setGlobalError ] = useState(true);
    //Conex to endpoint
    const products = async ()=>{
        const request = await baseAxios.get('/productos');
        return request;
    }
    //Execute conexion to endpoint
    useEffect(()=>{
        products().then(res=>{
            const { data } = res;
            if(data){
                console.log(data);
                setStateProducts(true);
            }else{
                setStateProducts(false);
            }
        }).catch(err=>{
            setStateProducts(false);
        });
    }, [ globalDelete ]);

    return (
        <Container cls={'container container--bg custom-fonts'}>  
            <Title text_title={'Mis productos'} btn_text="Crear producto" btn_link={'/productos/crear'} />
        </Container>
    )
}

export { Product }