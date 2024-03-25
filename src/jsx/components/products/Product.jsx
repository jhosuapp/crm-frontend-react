//Hooks react
import { useContext, useEffect, useState } from "react";
//Global components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
//Components product
import { ProductList } from "./ProductList";
//Context
import { GlobalContext } from "../../context/GlobalContext";
//Axios
import { baseAxios } from "../../config/Axios";

const Product = ()=>{
    //Global context && states
    const { globalDelete, setGlobalDelete, globalError, setGlobalError } = useContext(GlobalContext);
    const [ stateProducts, setStateProducts ] = useState([]);
    //Conex to endpoint
    const products = async ()=>{
        const request = await baseAxios.get('/productos');
        return request;
    }
    //Execute conexion to endpoint
    useEffect(()=>{
        products().then(res=>{
            const { data } = res;
            console.log(data);
            if(data){
                setStateProducts(data);
                setGlobalError(true);
            }else{
                setGlobalError(false);
            }
        }).catch(err=>{
            setGlobalError(false);
        });
    }, [ globalDelete ]);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Mis productos'} btn_text="Crear producto" btn_link={'/productos/crear'} />
            </Container>
            <Container cls={'container container--bg custom-fonts'}>
                <section className="list-products">
                    { 
                        stateProducts.map((product)=>(
                            <ProductList key={product._id} product={ product } ></ProductList>
                        ))
                    }
                </section>
            </Container>
        </>
    )
}

export { Product }