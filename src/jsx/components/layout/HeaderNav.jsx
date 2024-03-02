import { Link } from "react-router-dom";

const HeaderNaV = ()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Clientes</Link>
                </li>
                <li>
                    <Link to={"/productos"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/pedidos"}>Pedidos</Link>
                </li>
            </ul>
        </nav>
    );
}

export { HeaderNaV }