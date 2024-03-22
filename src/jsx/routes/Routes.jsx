//Clients
import { Client } from '../components/clients/Clients.jsx';
import { ClientCreate } from '../components/clients/ClientCreate.jsx';
import { ClientEdit } from '../components/clients/ClientEdit.jsx';
//Products
import { Product } from '../components/products/Product.jsx';
import { ProductCreate } from '../components/products/ProductCreate.jsx';
import { ProductEdit } from '../components/products/ProductEdit.jsx';
import { Orders } from '../components/orders/Orders.jsx';
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
            <Route path="/pedidos" element={ <Orders /> } exact />
        </Routes>
    );
}

export { Routing }