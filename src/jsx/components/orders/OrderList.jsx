//Icons
import iconEdit from '../../../assets/svg/icon-edit.svg';
import iconDelete from '../../../assets/svg/icon-delete.svg';

const OrderList = ({ order, indice })=>{
    //Client data
    const { nombre, apellido } = order.cliente;
    //Order data
    const { pedido, total } = order;

    return (
        <>
            <div className="item">
                {/* Number order */}
                <p className="number-order">Orden #{ indice + 1 }</p>
                <p className="total-order">Total: ${ total }</p>
                {/* End number order */}
                {/* Data order with actions */}
                <div className="block-data">
                    <div className="data">
                        <p><b>Orden a nombre de:</b> <a href="#">{ `${nombre} ${apellido}` }</a></p>
                        <p><b>Asigna una orden a:</b> <a href="#">{ `${nombre} ${apellido}` }</a></p>
                    </div>
                    <div className="actions">
                        <a className="btn btn--icon">
                            <img src={ iconEdit } alt="Icono editar" />
                            Editar orden
                        </a>
                        <a className="btn btn--danger btn--icon">
                            <img src={ iconDelete } alt="Icono editar" />
                            Eliminar orden
                        </a>
                    </div>
                </div>
                {/* End data order with actions */}
                <div className="block-products">
                    {pedido.map((data)=>{
                        const { cantidad, producto:{ imagen, nombre, precio } } = data;
                        const { _id } = data;
                        return  <div key={ _id } className="element-content">
                                    <div className="block">
                                        <img src={ `http://localhost:5000/${imagen}` } alt="imagen producto" />
                                        <p>Cantida: { cantidad }</p>
                                    </div>
                                    <p>Nombre: { nombre }</p>
                                    <p>Precio: ${ precio }</p>
                                </div>
                    })}
                </div>
            </div>
        </>
    );
}

export { OrderList }