//Axios
import { useEffect } from "react";
import { baseAxios } from "../../config/Axios";
//Components
import { Container } from "../global/Container";
import { Title } from "../global/Title";
//Icons
import iconEdit from '../../../assets/svg/icon-edit.svg';
import iconDelete from '../../../assets/svg/icon-delete.svg';

const Order = ()=>{

    const request = async ()=>{
        const response = await baseAxios.get('/pedidos')
        return response.data;
    }

    useEffect(()=>{
        request()
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
    }, []);


    return (
        <>
            <Container cls={'container container--bg custom-fonts'}>  
                <Title text_title={'Mis Pedidos'}  btn_text="Asignar pedido" btn_link={'/clientes/'}/>
            </Container>
            <Container cls={'container container--bg custom-fonts order-list'}>
                <article>
                    <div className="item">
                        {/* Number order */}
                        <p className="number-order">Orden #1</p>
                        <p className="total-order">Total: $100000</p>
                        {/* End number order */}
                        {/* Data order with actions */}
                        <div className="block-data">
                            <div className="data">
                                <p><b>Orden a nombre de:</b> <a href="#">Jhosua Penagos</a></p>
                                <p><b>Asigna una orden a:</b> <a href="#">Jhosua Penagos</a></p>
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
                            <div className="element-content">
                                <div className="block">
                                    <img src={ iconEdit } alt="imagen producto" />
                                    <p>Cantida: 10</p>
                                </div>
                                <p>Nombre: React camiseta</p>
                                <p>Precio: $100</p>
                            </div>
                            <div className="element-content">
                                <div className="block">
                                    <img src={ iconEdit } alt="imagen producto" />
                                    <p>Cantida: 10</p>
                                </div>
                                <p>Nombre: React camiseta</p>
                                <p>Precio: $100</p>
                            </div>
                            <div className="element-content">
                                <div className="block">
                                    <img src={ iconEdit } alt="imagen producto" />
                                    <p>Cantida: 10</p>
                                </div>
                                <p>Nombre: React camiseta</p>
                                <p>Precio: $100</p>
                            </div>
                            <div className="element-content">
                                <div className="block">
                                    <img src={ iconEdit } alt="imagen producto" />
                                    <p>Cantida: 10</p>
                                </div>
                                <p>Nombre: React camiseta</p>
                                <p>Precio: $100</p>
                            </div>
                        </div>
                    </div>
                </article>
            </Container>
        </>
    )
}

export { Order }