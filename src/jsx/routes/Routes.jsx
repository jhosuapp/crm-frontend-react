//Clients
import { Clients } from '../components/clients/Clients.jsx';
import { Products } from '../components/products/Products.jsx';
import { Orders } from '../components/orders/Orders.jsx';
//Routing react dom
import { Routes, Route } from 'react-router-dom';

const Routing = ()=>{
    return( 
        <Routes>
            <Route path="/" element={ <Clients /> } exact />
            <Route path="/productos" element={ <Products /> } exact />
            <Route path="/pedidos" element={ <Orders /> } exact />
        </Routes>
    );
}

export { Routing }