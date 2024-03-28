//Axios
import { baseAxios } from '../../config/Axios';
//React hooks
import { useContext } from 'react';
//Global context
import { GlobalContext } from '../../context/GlobalContext';
//Global components
import { Modal } from '../global/Modal';
import { ModalConfirm } from '../global/ModalConfirm';

const ProductDelete = ({ id_product })=>{
    //Global 
    const { setGlobalDelete, globalModalConfirm, setGlobalModalConfirm  } = useContext(GlobalContext);
    //Request
    const request = async ()=>{
        const response = await baseAxios.delete(`/productos/${id_product}`);
        return response;
    }
    //Handle event
    const deleteProduct = ()=>{
        request().then(res=>{
            const { data } = res;
            if(data.mensaje == "El Producto se ha eliminado"){
                setGlobalDelete(id_product);
            }else{

            }
        }).catch(err=>{
            console.log(err);
        })
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