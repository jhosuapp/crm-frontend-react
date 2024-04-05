const OrderMake = ( { totalPrice } )=>{
    return (
        <>
            <article>
                <h3>Total a pagar: ${ totalPrice }</h3>
            </article>
            <article>
                <button className="btn">Realizar pedido</button>
            </article>
        </>
    )
}

export { OrderMake }