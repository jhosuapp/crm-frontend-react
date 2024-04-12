//Hooks
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
//Components
import { Container } from "../global/Container";
import { Modal } from "../global/Modal";
//Axios
import { baseAxios } from '../../config/Axios';
//Global context
import { GlobalContext } from "../../context/GlobalContext";
const Login = ()=>{
    //Hook form react
    const { register, handleSubmit, formState: { errors } } = useForm();
    //Global context
    const { globalModal, setGlobalModal } = useContext(GlobalContext);
    const navigate = useNavigate();
    //request
    const request = async (body)=>{
        await baseAxios.post('iniciar-sesion', body)
            .then(response=>{
                if(response.status == 200){
                    navigate("/clientes");
                }else{
                    console.log('entra');
                    setGlobalModal(true);
                }
            }).catch(err=>{
                setGlobalModal(true);
                console.log(err);
            })
    }


    //Request when all input are ok
    const onSubmit = data => data && request(data);

    return (
        <>
            <Container cls={'container container--bg custom-fonts login'}> 
                <article>
                    <h1>Iniciar sesión</h1>
                    {/* Form */}
                    <form className="custom-input" onSubmit={ handleSubmit(onSubmit) } noValidate={true}>
                        <div className="block-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Email" name="email" id="email" 
                                {...register("email", { 
                                    required: 'Este campo es requerido', 
                                    maxLength: { value: 50, message: 'El límite permitido de caracteres es 50' },
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "Dirección de correo electrónico inválida" }
                                })}
                            />
                            {errors.email && <p className="error--form">{errors.email.message}</p>}
                        </div>
                        <div className="block-input">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" placeholder="Contraseña" name="password" id="password" 
                                {...register("password", { 
                                    required: 'Este campo es requerido', 
                                    maxLength: {value: 50, message: 'El límite permitido de caracteres es 30' },
                                    minLength: {value: 3, message: 'El mínimo requerido de caracteres es 3' },
                                })}
                            />
                            {errors.password && <p className="error--form">{errors.password.message}</p>}
                        </div>
                        <div className="block-actions">
                            <button className="btn">Iniciar sesión</button>
                        </div>
                    </form>
                </article>
            </Container>
            {/* Modal */}
            <Modal 
                cls={`modal--error ${globalModal && 'active'}`} 
                icon={true} 
                message={"Contraseña o correo invalido"} 
            />
        </>
    )
}

export { Login }