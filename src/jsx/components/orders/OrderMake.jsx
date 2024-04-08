import { useParams } from "react-router-dom"
import { baseAxios } from "../../config/Axios"

const OrderMake = ( { totalPrice, products } )=>{
    const { id } = useParams();

    //Request
    const request = async(body)=>{
        const response = await baseAxios.post(`/pedidos/nuevo/${ id }`, body)
        return response;
    }
    
    //Productos selected
    const productsSelected = ()=>{
        const productsCopy = [...products];
        productsCopy.forEach((data)=>{ 
            !data.amount && (data.amount = 1); 
        });
        //Filter products selected
        const filterProducts = productsCopy.filter(product => (
            product.selected == true
        ));

        return filterProducts;
    }

    const onClick = ()=>{
        console.log(productsSelected());
        // const data = {
        //     "cliente": id,
        //     "pedido": [
        //         {"producto": "660db336d981cad1eb6a7dd7", "cantidad": 2 }
        //     ],
        //     "total": totalPrice
        // }

        // request(data);
    }

    return (
        <>
            <article>
                <h3>Total a pagar: ${ totalPrice }</h3>
            </article>
            <article>
                <button onClick={ onClick }  className="btn">Realizar pedido</button>
            </article>
        </>
    )
}

export { OrderMake }