//React hooks
import { useContext } from 'react';
import { Link } from "react-router-dom";
//Components
import { ProductDelete } from "./ProductDelete";
//Global context
import { GlobalContext } from '../../context/GlobalContext';

const ProductActions = ({ id_product })=>{
    //Get handle click
    const { handleClick } = useContext(GlobalContext);
    
    return (
        <div className="actions">
            <Link to={`/productos/editar/${ id_product }`} onClick={()=>{ handleClick(); }} className="item">
                <span>Editar</span>
            </Link>
            <ProductDelete id_product={ id_product } />
        </div>
    )
}

export { ProductActions }