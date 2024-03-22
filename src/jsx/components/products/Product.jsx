import { Container } from "../global/Container";
import { Title } from "../global/Title";

const Product = ()=>{
    return (
        <Container cls={'container container--bg custom-fonts'}>  
            <Title text_title={'Mis productos'} btn_text="Crear producto" btn_link={'/productos/crear'} />
        </Container>
    )
}

export { Product }