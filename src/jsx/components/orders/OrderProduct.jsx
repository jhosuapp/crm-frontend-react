import { useEffect, useState } from "react";
import { baseAxios } from "../../config/Axios";

const OrderProduct = ()=>{

    const [ products, setProducts ] = useState([]);

    //Request products
    const request = async ()=>{
        const response = await baseAxios.get('/productos');
        return response;
    }

    useEffect(()=>{
        request().then((res)=>{
            const { status, data } = res;
            //Validate status
            status == 200 ? setProducts(data) : setProducts({});
        }).catch(err => {
            console.log(err)
        });
    }, []);

    return (
        <>
            <article>
                <h3>Selecciona los productos</h3>
                    {
                        products.map((product)=>(
                        <div className="item" key={product._id}>
                            <div className="block">
                                <picture>
                                    <img src={`http://localhost:5000/${product.imagen}`} alt="producto" />
                                </picture>
                                <div>
                                    <p className="name">{ product.nombre }</p>
                                    <p className="price">${ product.precio }</p>
                                </div>
                            </div>
                            <button className="btn">Añadir producto</button>
                        </div>
                        ))
                    }
            </article>
            <article>
                <h3>Productos seleccionados</h3>
            </article>
        </>
    );
}

export { OrderProduct }