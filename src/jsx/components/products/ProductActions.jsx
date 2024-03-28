import { ProductDelete } from "./ProductDelete"

const ProductActions = ({ id_product })=>{
    return (
        <div className="actions">
            <a className="item">
                <span>Editar</span>
            </a>
            <ProductDelete id_product={ id_product } />
        </div>
    )
}

export { ProductActions }