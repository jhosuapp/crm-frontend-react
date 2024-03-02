//Layout
import { Header } from "./components/layout/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Clients
import { Clients } from './components/clients/Clients.jsx';
import { Products } from './components/products/Products.jsx';
import { Orders } from './components/orders/Orders.jsx';

function App() {

  return (
    <Router>
      <>
        <Header />
        <main>
          <p>jola</p>
          <Routes>
            <Route path="/" element={ <Clients /> } exact />
            <Route path="/productos" element={ <Products /> } exact />
            <Route path="/pedidos" element={ <Orders /> } exact />
          </Routes>
        </main>
      </>
    </Router>
  )
}

export default App
