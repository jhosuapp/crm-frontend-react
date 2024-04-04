import { useContext } from "react";
//Icon
import iconDelete from '../../../assets/svg/icon-delete.svg';
//Context
import { GlobalContext } from '../../context/GlobalContext';
//Component
import { ModalConfirm } from "../global/ModalConfirm";
//Axios
import { baseAxios } from '../../config/Axios';

const ClientDelete = ( { id_client } )=>{
    //Global context
    const { setGlobalModal, setGlobalError, globalModalConfirm, setGlobalModalConfirm, setGlobalDelete } = useContext(GlobalContext);
    //Request
    const request = async () =>{
        const response = await baseAxios.delete(`/clientes/${id_client}`);
        return response;
    }
    //Funcionts
    const deleteClient = () =>{
        request().then((res)=>{
            const { data:{ code } } = res;
            //Validate success register
            code == 11000 ? setGlobalError(true) : ( setGlobalError(false), setGlobalDelete(id_client) );
            //Enable modal
            setGlobalModal(true);
        }).catch(err=>{
            //Enable modal
            setGlobalModal(true);
            setGlobalError(true);
        });
    }
    return(
        <>
            <button className="item" onClick={ ()=>{ setGlobalModalConfirm(true) } }>
                <p>Eliminar</p>
                <img src={ iconDelete } alt="icon delete" />
            </button>
            {/* Modal */}

            {/* Modal confirm */}
            <ModalConfirm 
                cls={`${globalModalConfirm && 'active'}`}
                message={'Estas seguro de eliminar a tu cliente, esta acción no se puede reversar'} 
                handleEvent={ deleteClient }
            />
        </>
    );
}

export {  ClientDelete } 