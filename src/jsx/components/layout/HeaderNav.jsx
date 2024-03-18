import { useContext } from "react";
import { Link } from "react-router-dom";
//Global context
import { GlobalContext } from "../../context/GlobalContext";


const HeaderNaV = ()=>{
    //Handle click
    const { handleClick } = useContext(GlobalContext);

    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"} onClick={()=>{ handleClick(); }}>Clientes</Link>
                </li>
                <li>
                    <Link to={"/productos"} onClick={()=>{ handleClick(); }}>Productos</Link>
                </li>
                <li>
                    <Link to={"/pedidos"} onClick={()=>{ handleClick(); }}>Pedidos</Link>
                </li>
            </ul>
        </nav>
    );
}

export { HeaderNaV }