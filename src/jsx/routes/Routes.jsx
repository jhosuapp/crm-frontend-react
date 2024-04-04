//Clients
import { Client } from '../components/clients/Clients.jsx';
import { ClientCreate } from '../components/clients/ClientCreate.jsx';
import { ClientEdit } from '../components/clients/ClientEdit.jsx';
//Products
import { Product } from '../components/products/Product.jsx';
import { ProductCreate } from '../components/products/ProductCreate.jsx';
import { ProductEdit } from '../components/products/ProductEdit.jsx';
//Orders
import { Order } from '../components/orders/Order.jsx';
import { OrderCreate } from '../components/orders/OrderCreate.jsx';
//Routing react dom
import { Routes, Route } from 'react-router-dom';


const Routing = ()=>{
    return( 
        <Routes>
            {/* Clients routes */}
            <Route path="/" element={ <Client /> } exact />
            <Route path="/clientes/crear" element={ <ClientCreate /> } exact />
            <Route path="/clientes/editar/:id" element={ <ClientEdit /> } exact />

            {/* Clients products */}
            <Route path="/productos" element={ <Product /> } exact />
            <Route path="/productos/crear" element={ <ProductCreate /> } exact />
            <Route path="/productos/editar/:id" element={ <ProductEdit /> } exact />
            {/* Clients products */}
            <Route path="/pedidos" element={ <Order /> } exact />
            <Route path="/pedidos/asignar/:id" element={ <OrderCreate /> } exact />
        </Routes>
    );
}

export { Routing }