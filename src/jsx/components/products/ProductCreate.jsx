//Hooks
import { useForm } from "react-hook-form";
import { useContext } from "react";
//Components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
import { Modal } from "../global/Modal";
//Global context
import { GlobalContext } from "../../context/GlobalContext";
//Axios
import { baseAxios } from '../../config/Axios';

const ProductCreate = ()=>{
    //Hook form react
    const { register, handleSubmit, formState: { errors } } = useForm();
    //Global context
    const { globalModal, setGlobalModal, globalError, setGlobalError } = useContext(GlobalContext);
    //Request
    const request = async (body)=>{   
        //Get parameters
        const { nombre, precio, imagen } = body;
        const formData = new FormData();
        //Set parameters
        formData.append('precio', precio);
        formData.append('nombre', nombre);
        formData.append('imagen', imagen[0]);
        //Conext to endpoint
        await baseAxios.post('/productos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Asegúrate de especificar el tipo de contenido como 'multipart/form-data'
            }
        }).then(res=>{
            const { data } = res;
            setGlobalModal(true);
            if(data.mensaje == "Se agrego un nuevo producto"){
                setGlobalError(false);
            }else{
                setGlobalError(true);
            }
        }).catch(error=>{
            //Enable modal and set error
            setGlobalModal(true);
            setGlobalError(true);
        });
    }
    //Request when all input are ok
    const onSubmit = data => data && request(data);

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Crear producto'} btn_text="Volver" btn_link={'/productos/'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>
                <form className='custom-form' onSubmit={ handleSubmit(onSubmit) } noValidate={true}>
                    {/* Name */}
                    <div className="block-input">
                        <label htmlFor="nombre">Nombre Producto</label>
                        <input 
                            type="text" id="nombre"
                            name="nombre" 
                            placeholder='Nombre'
                            {...register("nombre", { required: 'Este campo es requerido', maxLength: { value: 30, message: 'El límite permitido de caracteres es 30' } })}
                        />
                        {errors.nombre && <p className="error--form">{errors.nombre.message}</p>}
                    </div>
                    {/* Price */}
                    <div className="block-input">
                        <label htmlFor="precio">Precio Producto</label>
                        <input 
                            type="number" id="precio"
                            name="precio" 
                            placeholder='Precio'
                            {...register("precio", { 
                                required: 'Valor invalido', 
                                maxLength: { value: 10, message: 'El límite permitido de caracteres es 10' },
                                pattern: { value: /^[0-9]+$/i, message: "No ingrese caracteres especiales, ingrese solamente el número" }
                            })}
                        />
                        {errors.precio && <p className="error--form">{errors.precio.message}</p>}
                    </div>
                    {/* File */}
                    <div className="block-input">
                        <label htmlFor="imagen">Imagen Producto</label>
                        <input 
                            type="file" id="imagen"
                            {...register("imagen", {
                                required: "Este campo es requerido",
                                validate: {
                                  fileSize: (value) => value[0]?.size <= 1048576 || "El archivo debe ser menor o igual a 1MB", // 1MB en bytes
                                  fileExtension: (value) => {
                                        const allowedExtensions = ["jpg", "jpeg", "png"];
                                        const extension = value[0]?.name.split('.').pop().toLowerCase();
                                        return allowedExtensions.includes(extension) || "Formato de archivo no permitido";
                                  }
                                }
                            })}
                        />
                        {errors.imagen && <p className="error--form">{errors.imagen.message}</p>}
                    </div>
                    {/* Actions */}
                    <div className="block-actions">
                        <button className="btn">Crear producto</button>
                    </div>
                </form>
            </Container>
            <Modal 
                cls={globalError ? `${globalModal && 'active'} modal--error` : `${globalModal && 'active'} modal--success`}
                message={globalError ? 'No se ha podido crear el producto, intentalo de nuevo más adelante' : 'El producto se ha creado de manera exitosa'}
                icon={globalError ? true : false}
                link={'/productos'}
            />
        </>
    )
}

export { ProductCreate }