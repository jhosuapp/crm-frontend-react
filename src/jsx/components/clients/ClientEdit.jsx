//Hooks
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react";
//Components
import { Container } from '../global/Container';
import { Title } from '../global/Title';
import { Modal } from "../global/Modal";
import { baseAxios } from '../../config/Axios';
//Global context 
import { GlobalContext } from '../../context/GlobalContext';


const ClientEdit = ()=>{
    //Get id client
    const { id } = useParams();
    //Global context
    const { globalModal, setGlobalModal, globalError, setGlobalError } = useContext(GlobalContext);
    //Hook form react
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    //Request for get client data
    const requestGetClient = async () => {
        const dataClient = await baseAxios.get(`/clientes/${id}`);
        return dataClient;
    }
    //Execute effect
    useEffect(()=>{
        requestGetClient().then((res)=>{
            const { data:{ nombre, apellido, telefono, email, empresa} } = res;
            const valuesToSet = { nombre, apellido, telefono, email, empresa };
            //Set values on a inputs
            Object.keys(valuesToSet).forEach(key => {
              setValue(key, valuesToSet[key]);
            });
        });
    },[]);
    //Request for update clients
    const request = async (body)=>{
        //Conex to endpoint
        await baseAxios.put(`/clientes/${id}`, body)
            .then(res =>{
                const { data:{ code } } = res;
                //Validate success register
                code == 11000 ? setGlobalError(true) : setGlobalError(false);
                //Enable modal
                setGlobalModal(true);
            }).catch((err)=>{
                //Enable modal
                setGlobalModal(true);
                setGlobalError(true);
            });
    }
    //Request when all input are ok
    const onSubmit = data => data && request(data);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Editar cliente'} cls={'reverse'} btn_text={'volver'} btn_link={'/'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>
                <form className='custom-form' onSubmit={ handleSubmit(onSubmit) } noValidate={true}>
                    <div className="block-input">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" id="nombre"
                            name="nombre" 
                            placeholder='Nombre'
                            {...register("nombre", { required: 'Este campo es requerido', maxLength: { value: 30, message: 'El límite permitido de caracteres es 30' } })}
                        />
                        {errors.nombre && <p className="error--form">{errors.nombre.message}</p>}
                    </div>
                    <div className="block-input">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text" id="apellido"
                            name="apellido" 
                            placeholder='Apellido'
                            {...register("apellido", { required: 'Este campo es requerido', maxLength: {value: 50, message: 'El límite permitido de caracteres es 30' }} )}
                        />
                        {errors.apellido && <p className="error--form">{errors.apellido.message}</p>}
                    </div>
                    <div className="block-input">
                        <label htmlFor="telefono">Télefono</label>
                        <input 
                            type="text" id="telefono"
                            name="telefono" 
                            placeholder='Télefono'
                            {...register("telefono", { required: 'Este campo es requerido', maxLength: {value: 12, message: 'El límite permitido de caracteres es 30' }} )}
                        />
                        {errors.telefono && <p className="error--form">{errors.telefono.message}</p>}
                    </div>
                    <div className="block-input">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" id="email"
                            name="email" 
                            placeholder='Email'
                            {...register("email", { 
                                required: 'Este campo es requerido', 
                                maxLength: { value: 50, message: 'El límite permitido de caracteres es 50' },
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "Dirección de correo electrónico inválida" }
                            })}
                        />
                        {errors.email && <p className="error--form">{errors.email.message}</p>}
                    </div>
                    <div className="block-input">
                        <label htmlFor="empresa">Empresa</label>
                        <input 
                            type="text" id="empresa"
                            name="empresa" 
                            placeholder='Empresa'
                            {...register("empresa", { required: 'Este campo es requerido', maxLength: {value: 50, message: 'El límite permitido de caracteres es 50' } })}
                        />
                        {errors.empresa && <p className="error--form">{errors.empresa.message}</p>}
                    </div>

                    <div className="block-actions">
                        <button className="btn">Guardar cambios</button>
                    </div>
                </form>
            </Container>
            {/* Modal */}
            <Modal 
                cls={`${globalError ? 'modal--error' : 'modal--success'} ${globalModal && 'active'}`} 
                icon={globalError} 
                message={`${globalError ? 'El correo ingresado ya se encuentra registrado' : 'Actualización exitosa'}`} 
                link={'/'} 
            />
        </>
    );
}

export { ClientEdit }