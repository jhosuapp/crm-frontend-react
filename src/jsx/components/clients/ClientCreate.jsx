import { useState } from 'react';
import { Container } from '../global/Container';
import { Title } from '../global/Title';
import { ClientModel } from './ClientModel';


const ClientCreate = ()=>{

    const [ clientForm, setClientForm ] = useState(ClientModel);
    //Update state
    const handleChange = (event) => { 
        setClientForm({
            ...clientForm,
            [event.target.name] : event.target.value
        });
    }

    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Crear cliente'} cls={'reverse'} btn_text={'volver'} btn_link={'/'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>

                <form className='custom-form'>
                    <div className="block-input">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" id="nombre"
                            name="nombre" 
                            placeholder='Nombre'
                            onChange={ (event)=> handleChange(event) }
                        />
                    </div>
                    <div className="block-input">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text" id="apellido"
                            name="apellido" 
                            placeholder='Apellido'
                            onChange={ (event)=> handleChange(event) }
                        />
                    </div>
                    <div className="block-input">
                        <label htmlFor="telefono">Télefono</label>
                        <input 
                            type="text" id="telefono"
                            name="telefono" 
                            placeholder='Télefono'
                            onChange={ (event)=> handleChange(event) }
                        />
                    </div>
                    <div className="block-input">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" id="email"
                            name="email" 
                            placeholder='Email'
                            onChange={ (event)=> handleChange(event) }
                        />
                    </div>
                    <div className="block-input">
                        <label htmlFor="empresa">Empresa</label>
                        <input 
                            type="text" id="empresa"
                            name="empresa" 
                            placeholder='Empresa'
                            onChange={ (event)=> handleChange(event) }
                        />
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