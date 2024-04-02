//Hooks react
import { useContext, useEffect, useState } from "react";
//Global components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
import { ErrorMessage } from  "../global/ErrorMessage";
import { Modal } from '../global/Modal';
//Components product
import { ProductList } from "./ProductList";
//Context
import { GlobalContext } from "../../context/GlobalContext";
//Axios
import { baseAxios } from "../../config/Axios";

const Product = ()=>{
    //Global context && states
    const { globalDelete, globalModal, globalError } = useContext(GlobalContext);
    const [ stateProducts, setStateProducts ] = useState([]);
    const [ error, setError ] = useState(false);
    //Conex to endpoint
    const products = async ()=>{
        const request = await baseAxios.get('/productos');
        return request;
    }
    //Execute conexion to endpoint
    useEffect(()=>{
        setTimeout(()=>{
            products().then(res=>{
                const { data } = res;
                //Validate data
                if(data){
                    setStateProducts(data);
                    setError(false);
                }else{
                    setError(true);
                }
            }).catch(err=>{
                setError(true);
            });
        }, 500);
    }, [ globalDelete ]);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Mis productos'} btn_text="Crear producto" btn_link={'/productos/crear'} />
            </Container>
            <Container cls={'container container--bg custom-fonts'}>
                { stateProducts.length == 0 && !error && <ErrorMessage text={"Usted no cuenta con productos actualmente, crea un nuevo producto para continuar"} cls={'secondary'} />}
                <article className="list-products">
                    { 
                        stateProducts.map((product)=>(
                            <ProductList key={product._id} product={ product } ></ProductList>
                            ))
                        }
                </article>
                { error && <ErrorMessage text={'Ha ocurrido un error inesperado al cargar los productos'}  /> }
            </Container>
            <Modal 
                cls={globalError ? `${globalModal && 'active'} modal--error` : `${globalModal && 'active'} modal--success`}
                message={globalError ? 'No se ha podido crear el producto, intentalo de nuevo más adelante' : 'El producto se ha eliminado de manera exitosa'}
                icon={globalError ? true : false}
                link={'/productos'}
            />
        </>
    )
}

export { Product }