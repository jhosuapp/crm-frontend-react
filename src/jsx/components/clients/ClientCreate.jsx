import { Container } from '../global/Container';
import { Title } from '../global/Title';


const ClientCreate = ()=>{
    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Crear cliente'} cls={'reverse'} btn_text={'volver'} btn_link={'/'} />
            </Container>
            <Container cls={'container container--bg custom-fonts custom-input'}>

                <form className='custom-form'>
                    <div className="block-input">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder='Nombre'/>
                    </div>
                    <div className="block-input">
                        <label htmlFor="last_name">Apellido</label>
                        <input type="text" id="last_name" name="last_name" placeholder='Apellido'/>
                    </div>
                    <div className="block-input">
                        <label htmlFor="phone">Télefono</label>
                        <input type="text" id="phone" name="phone" placeholder='Télefono'/>
                    </div>
                    <div className="block-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder='Email'/>
                    </div>
                    <div className="block-input">
                        <label htmlFor="company">Empresa</label>
                        <input type="text" id="company" name="company" placeholder='Empresa'/>
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