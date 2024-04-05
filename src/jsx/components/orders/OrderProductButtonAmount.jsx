//React hook
import { useState } from "react";

const OrderProductButtonAmount = ( { product, setTotalPrice, totalPrice } )=>{
    //State number product
    const [ numberProduct, setNumberProduct ] = useState(1);
    //Sum products
    const handleClickSum = (e)=>{
        if(numberProduct < 10){
            setNumberProduct(numberProduct + 1);
            // Set price
            setTotalPrice(parseFloat(e.target.dataset.price) + totalPrice);
        }
    }
    //Rest products
    const handleClickRest = (e)=>{
        if(numberProduct > 1){
            setNumberProduct(numberProduct - 1);
            //Set price
            setTotalPrice(totalPrice - parseFloat(e.target.dataset.price));
        }
    }
    return (
        <div className="block-number-product">
            <button data-price={ product.precio }  onClick={ (e)=>{ handleClickRest(e) } }>
                -
            </button>
            <p>{ numberProduct }</p>
            <button data-price={ product.precio } onClick={ (e)=>{ handleClickSum(e) } }>
                +
            </button>
        </div>
    )
}

export { OrderProductButtonAmount }