//Actions
import { ProductActions } from './ProductActions';

const ProductList = ( { product } )=>{
    //Get parameters
    const { nombre, precio, imagen } = product;

    return (
        <article className="product">
            <picture>
                <img src={"http://localhost:5000/" + imagen } alt={ imagen } />
            </picture>
            <div className="dsc">
                <p>Curso { nombre }</p>
                <p>${ precio }</p>
            </div>
            <ProductActions />
        </article>
    );
}

export { ProductList }