//Axios
import { baseAxios } from '../../config/Axios';
//React hooks
import { useContext, useState } from 'react';
//Global context
import { GlobalContext } from '../../context/GlobalContext';
//Global components
import { ModalConfirm } from '../global/ModalConfirm';

const ProductDelete = ({ id_product })=>{
    //Global 
    const { setGlobalDelete, globalModalConfirm, setGlobalModalConfirm, setGlobalModal, setGlobalError   } = useContext(GlobalContext);
    //Request
    const request = async ()=>{
        const response = await baseAxios.delete(`/productos/${id_product}`);
        return response;
    }
    //Handle event
    const deleteProduct = ()=>{
        request().then(res=>{
            const { data } = res;
            //Validate success register
            setGlobalModal(true);
            if(data.mensaje == "El Producto se ha eliminado"){
                setGlobalError(false);
                setGlobalDelete(id_product);
            }else{
                setGlobalError(true);
            }
        }).catch(err=>{
            //Enable modal
            setGlobalModal(true);
            setGlobalError(true);
        });
    }

    return (
        <>
            <ModalConfirm 
                cls={ globalModalConfirm && 'active' }
                message={'¿Estas seguro de eliminar este producto? esta acción es irreversible'}
                handleEvent={ deleteProduct }
            />
            <a onClick={()=>{ setGlobalModalConfirm(true); }}  className="item">
                <span>Eliminar</span>
            </a>
        </>
    )
}

export { ProductDelete }