//React hooks
import { useParams } from "react-router-dom"
import { useContext, useState } from "react";
//Axios
import { baseAxios } from "../../config/Axios"
//Components
import { Modal } from "../global/Modal";
//Global context 
import { GlobalContext } from '../../context/GlobalContext';

const OrderMake = ( { totalPrice, products } )=>{

    //Global context
    const { globalModal, setGlobalModal, globalError, setGlobalError } = useContext(GlobalContext);
    //Id url
    const { id } = useParams();
    //States
    const [copy, setCopy] = useState('');
    //Request
    const request = async(body)=>{
        const response = await baseAxios.post(`/pedidos/nuevo/${ id }`, body)
        return response;
    }
    
    //Productos selected
    const productsSelected = ()=>{
        const productsCopy = [...products];
        productsCopy.forEach((data)=>{ 
            !data.cantidad && (data.cantidad = 1); 
            data.producto = data._id;
        });
        //Filter products selected
        const filterProducts = productsCopy.filter(product => (
            product.selected == true
        ));

        return filterProducts;
    }

    const errorOrder = (copy)=>{
        setCopy(copy);
        setGlobalModal(true);
        setGlobalError(true);
    }

    //Onclick request
    const onClick = ()=>{
        const products = productsSelected();
        const data = {
            "cliente": id,
            "pedido": products,
            "total": totalPrice
        }
        // Validate if client select a product
        if(products.length > 0){
            console.log('entra');
            request(data)
                .then(res=>{
                    console.log(res.status);
                    res.status == 200 ? setGlobalError(false) : setGlobalError(true);
                    setCopy('Ha ocurrido un error inesperado, intentalo nuevamente');
                    setGlobalModal(true);
                }).catch(err=>{
                    errorOrder('Ha ocurrido un error inesperado, intentalo nuevamente');
                });
        }else{
            errorOrder('Selecciona minímo un producto');
        }
    }

    return (
        <>
            <article>
                <h3>Total a pagar: ${ totalPrice }</h3>
            </article>
            <article>
                <button onClick={ onClick }  className="btn">Realizar pedido</button>
            </article>
            {/* Modal */}
            <Modal 
                cls={`${globalError ? 'modal--error' : 'modal--success'} ${globalModal && 'active'}`} 
                icon={globalError} 
                message={`${globalError ? copy : 'Orden creada exitosamente'}`} 
                link={copy == 'Selecciona minímo un producto' ? '' : '/pedidos'} 
            />
        </>
    )
}

export { OrderMake }