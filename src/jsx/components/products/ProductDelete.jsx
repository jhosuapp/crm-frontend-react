//Axios
import { baseAxios } from '../../config/Axios';
//React hooks
import { useContext, useState } from 'react';
//Global context
import { GlobalContext } from '../../context/GlobalContext';
//Global components
import { Modal } from '../global/Modal';
import { ModalConfirm } from '../global/ModalConfirm';

const ProductDelete = ({ id_product })=>{
    //Global 
    const { setGlobalDelete, globalModalConfirm, setGlobalModalConfirm, setGlobalModal, globalModal   } = useContext(GlobalContext);
    const [ error, setError ] = useState(false);
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
                setError(false);
                setGlobalDelete(id_product);
            }else{
                setError(true);
            }
        }).catch(err=>{
            //Enable modal
            setGlobalModal(true);
            setError(true);
        })
    }

    return (
        <>
            <Modal 
                cls={error ? `${globalModal && 'active'} modal--error` : `${globalModal && 'active'} modal--success`}
                message={error ? 'No se ha podido crear el producto, intentalo de nuevo más adelante' : 'El producto se ha creado de manera exitosa'}
                icon={error ? true : false}
                link={'/productos'}
            />
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