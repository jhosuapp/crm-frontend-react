import { useContext } from "react";
//Icon
import iconDelete from '../../../assets/svg/icon-delete.svg';
//Context
import { GlobalContext } from '../../context/GlobalContext';
//Component
import { Modal } from '../global/Modal';
//Axios
import { baseAxios } from '../../config/Axios';

const DeleteClient = ( { id_client } )=>{
    //Global context
    const { globalModal, setGlobalModal, globalError, setGlobalError } = useContext(GlobalContext);
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
            code == 11000 ? setGlobalError(true) : setGlobalError(false);
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
            <button className="item" onClick={()=>{  deleteClient(); }}>
                <img src={ iconDelete } alt="icon delete" />
            </button>
            {/* Modal */}
            <Modal 
                onClick={ ()=>{ setGlobalModal(false); } }
                cls={`${globalError ? 'modal--error' : 'modal--success'} ${globalModal && 'active'}`} 
                icon={globalError} 
                message={`${globalError ? 'El cliente no ha podido ser eliminado, intetanlo nuevamente' : 'Cliente eliminado de manera exitosa'}`} 
            />
        </>
    );
}

export {  DeleteClient } 