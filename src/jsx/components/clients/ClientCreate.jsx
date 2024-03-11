//Hooks
import { useForm } from "react-hook-form"
//Components
import { Container } from '../global/Container';
import { Title } from '../global/Title';
import { baseAxios } from '../../config/Axios';

const ClientCreate = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    //Request
    const request = async (body)=>{
        //Conex to endpoint
        await baseAxios.post('/clientes', body)
            .then(res =>{
                const { data:{ code } } = res;
                if(code == 11000){
                    alert('El correo ya ha sido registrado');
                }else{
                    alert('El usuario ha sido creado de manera exitosa');
                }
            }).catch((err)=>{
                console.log(err);
            });
    }
    //Request when all input are ok
    const onSubmit = data => data && request(data);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Crear cliente'} cls={'reverse'} btn_text={'volver'} btn_link={'/'} />
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
                        <button className="btn">Crear cliente</button>
                    </div>

                </form>

            </Container>
        </>
    );
}

export { ClientCreate }