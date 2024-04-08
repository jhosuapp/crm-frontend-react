import { useEffect, useState } from "react";
import { baseAxios } from "../../config/Axios";
import { ErrorMessage } from "../global/ErrorMessage";
//Components
import { OrderProductButtonAmount } from './OrderProductButtonAmount';

const OrderProduct = ({ setTotalPrice, totalPrice, products, setProducts })=>{



    //Request products
    const request = async ()=>{
        const response = await baseAxios.get('/productos');
        return response;
    }

    useEffect(()=>{
        request().then((res)=>{
            const { status, data } = res;
            data && data.forEach((data)=>{
                data.selected = false;
            });
            //Validate status
            status == 200 ? setProducts(data) : setProducts({});
        }).catch(err => {
            console.log(err)
        });
    }, []);
    //Select products
    const handleClickProduct = (e, state)=>{
        const copyProducts = [...products];
        const indexProduct = copyProducts.findIndex(product => product._id === e.target.dataset.product);
        copyProducts[indexProduct].selected = state;
        setProducts(copyProducts);
        //Set Price
        let sum;
        const price = e.target.dataset.price;
        state ? (sum = parseFloat(price) + parseFloat(totalPrice)) : (sum = parseFloat(totalPrice) - parseFloat(price));            
        setTotalPrice(sum);
    }

    return (
        <>
            <article>
                <h3>Selecciona los productos</h3>
                    {products.length === 0 && <ErrorMessage cls="secondary" text={"No cuentas con productos"} />}                    
                    {
                        products.map((product)=>(
                            <div className={`item ${product.selected && 'inactive'}`} key={product._id}>
                                <div className="block">
                                    <picture>
                                        <img src={`http://localhost:5000/${product.imagen}`} alt="producto" />
                                    </picture>
                                    <div>
                                        <p className="name">{ product.nombre }</p>
                                        <p className="price">${ product.precio }</p>
                                    </div>
                                </div>
                                <button 
                                    className="btn" 
                                    data-product={ product._id } 
                                    data-price={ product.precio } 
                                    onClick={ (e)=>{ handleClickProduct(e, true) } }
                                >
                                    Añadir producto
                                </button>
                            </div>
                        ))
                    }
            </article>
            <article>
                <h3>Productos seleccionados</h3>
                    {
                        products.map((product)=>(
                            <div className={`${product.selected && 'active' } item`} key={product._id}>
                                <div className="block">
                                    <picture>
                                        <img src={`http://localhost:5000/${product.imagen}`} alt="producto" />
                                    </picture>
                                    <div>
                                        <p className="name">{ product.nombre }</p>
                                        <p className="price">${ product.precio }</p>
                                    </div>
                                </div>
                                <OrderProductButtonAmount 
                                    product={ product } 
                                    setTotalPrice={ setTotalPrice } 
                                    totalPrice={ totalPrice } 
                                    products={ products } 
                                    setProducts={ setProducts } 
                                />
                                <button 
                                    className="btn btn--danger" 
                                    data-product={ product._id } 
                                    data-price={ product.precio } 
                                    onClick={ (e)=>{ handleClickProduct(e, false) } }
                                >
                                    Remover producto
                                </button>
                            </div>
                        ))
                    }
            </article>
        </>
    );
}

export { OrderProduct }