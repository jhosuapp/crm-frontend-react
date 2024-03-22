import { Container } from "../global/Container";
import { Title } from "../global/Title";

const ProductEdit = ()=>{
    return (
        <Container cls={'container container--bg custom-fonts'}>  
            <Title text_title={'Editar producto'} btn_text="Volver" btn_link={'/productos/'} />
        </Container>
    )
}

export { ProductEdit }