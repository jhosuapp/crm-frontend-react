import { Container } from "../global/Container";
import { Title } from "../global/Title";

const ProductCreate = ()=>{
    return (
        <Container cls={'container container--bg custom-fonts'}>  
            <Title text_title={'Crear producto'} btn_text="Volver" btn_link={'/productos/'} />
        </Container>
    )
}

export { ProductCreate }