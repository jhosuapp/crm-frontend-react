//React hook
import { useState } from "react";

const OrderProductButtonAmount = ( { product, setTotalPrice, totalPrice, products, setProducts } )=>{
    //State number product
    const [ numberProduct, setNumberProduct ] = useState(1);
    const productsCopy = [...products];


    const setProductAmount = (e, operation)=>{
        const idProduct = productsCopy.findIndex(prod => (
            prod._id == e.target.dataset.product
        ));
        productsCopy[idProduct].amount = operation;
        setProducts(productsCopy);
    }

    //Sum products
    const handleClickSum = (e)=>{
        if(numberProduct < 10){
            setNumberProduct(numberProduct + 1);
            // Set price
            setTotalPrice(parseFloat(e.target.dataset.price) + totalPrice);
            //Set amount to products
            setProductAmount(e, numberProduct + 1);
        }
    }
    //Rest products
    const handleClickRest = (e)=>{
        if(numberProduct > 1){
            setNumberProduct(numberProduct - 1);
            //Set price
            setTotalPrice(totalPrice - parseFloat(e.target.dataset.price));
            //Set amount to products
            setProductAmount(e, numberProduct + - 1);
        }
    }
    return (
        <div className="block-number-product">
            <button data-price={ product.precio } data-product={ product._id }  onClick={ (e)=>{ handleClickRest(e) } }>
                -
            </button>
            <p>{ numberProduct }</p>
            <button data-price={ product.precio } data-product={ product._id } onClick={ (e)=>{ handleClickSum(e) } }>
                +
            </button>
        </div>
    )
}

export { OrderProductButtonAmount }