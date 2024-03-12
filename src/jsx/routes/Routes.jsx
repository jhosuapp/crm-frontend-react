//Clients
import { Clients } from '../components/clients/Clients.jsx';
import { ClientCreate } from '../components/clients/ClientCreate.jsx';
import { ClientEdit } from '../components/clients/ClientEdit.jsx';
//Products
import { Products } from '../components/products/Products.jsx';
import { Orders } from '../components/orders/Orders.jsx';
//Routing react dom
import { Routes, Route } from 'react-router-dom';


const Routing = ()=>{
    return( 
        <Routes>
            {/* Clients routes */}
            <Route path="/" element={ <Clients /> } exact />
            <Route path="/clientes/crear" element={ <ClientCreate /> } exact />
            <Route path="/clientes/editar/:id" element={ <ClientEdit /> } exact />

            {/* Clients products */}
            <Route path="/productos" element={ <Products /> } exact />
            {/* Clients products */}
            <Route path="/pedidos" element={ <Orders /> } exact />
        </Routes>
    );
}

export { Routing }