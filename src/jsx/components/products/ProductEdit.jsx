//Hooks
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
import { Modal } from "../global/Modal";
//Global context
import { GlobalContext } from "../../context/GlobalContext";
//Axios
import { baseAxios } from '../../config/Axios';

const ProductEdit = ()=>{
    //Id url
    const { id } = useParams();
    //States
    const [ image, setImage ] = useState('');
    const [ isFileModified, setIsFileModified ] = useState(false);
    //Hook form react
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    //Global context
    const { globalModal, setGlobalModal, globalError, setGlobalError } = useContext(GlobalContext);
    //Set values from endpoint
    const requestSetData = async ()=>{
        const responseTwo = await baseAxios.get(`/productos/${id}`);
        return responseTwo;
    }
    //Execute request
    useEffect(()=>{
        requestSetData().then((res)=>{
            const { data:{ imagen, nombre, precio } } = res;
            const valuesToSet = { imagen, nombre, precio };
            setImage(`http://localhost:5000/${imagen}`);
            //Set values on a inputs
            Object.keys(valuesToSet).forEach(key => {
              setValue(key, valuesToSet[key]);
            });
            //Set image value
            setValue('imagen', 'test');
        });
    },[]);
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
        await baseAxios.put(`/productos/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Asegúrate de especificar el tipo de contenido como 'multipart/form-data'
            }
        }).then(res=>{
            const { status } = res;
            setGlobalModal(true);
            if(status == 200){
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
    //Onchange file
    const handleOnChange = (event)=>{
        const file = event.target.files[0];
        //Modify image
        setIsFileModified(true);
        //Update preview image
        setImage(URL.createObjectURL(file));
    }
    //Request when all input are ok
    const onSubmit = data => data && request(data);
    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Editar producto'} btn_text="Volver" btn_link={'/productos/'} />
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
                            onChangeCapture={ handleOnChange }
                            {...register("imagen", {
                                required: isFileModified,
                                validate: {
                                    fileSize: (value) => {
                                        if(isFileModified){
                                            return value[0]?.size <= 1048576 || "El archivo debe ser menor o igual a 1MB";
                                        }
                                    },// 1MB en bytes
                                    fileExtension: (value) => {
                                        if(isFileModified){
                                          const allowedExtensions = ["jpg", "jpeg", "png"];
                                          const extension = value[0]?.name.split('.').pop().toLowerCase();
                                            return allowedExtensions.includes(extension) || "Formato de archivo no permitido";
                                        }
                                    }
                                }
                            })}
                        />
                        {errors.imagen && <p className="error--form">{errors.imagen.message}</p>}
                    </div>
                    {/* Preview image */}
                    <div className="block-input block-image">
                        <label>Imagen actual</label>
                        <div className="block">
                            <img className="image-product" src={image} alt="imagen producto" />
                        </div>
                    </div>
                    {/* Actions */}
                    <div className="block-actions">
                        <button className="btn">Guardar</button>
                    </div>
                </form>
            </Container>
            <Modal 
                cls={globalError ? `${globalModal && 'active'} modal--error` : `${globalModal && 'active'} modal--success`}
                message={globalError ? 'No se ha podido editar el producto, intentalo de nuevo más adelante' : 'El producto se ha editado de manera exitosa'}
                icon={globalError ? true : false}
                link={'/productos'}
            />
        </>
    )
}

export { ProductEdit }