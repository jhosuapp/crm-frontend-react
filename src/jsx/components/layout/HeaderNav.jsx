import { useContext } from "react";
import { Link } from "react-router-dom";
//Global context
import { GlobalContext } from "../../context/GlobalContext";


const HeaderNaV = ()=>{
    //Handle click
    const { handleClick, enableMenu } = useContext(GlobalContext);

    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"} onClick={(e)=>{ handleClick(); enableMenu(e); }}>Clientes</Link>
                </li>
                <li>
                    <Link to={"/productos"} onClick={(e)=>{ handleClick(); enableMenu(e); }}>Productos</Link>
                </li>
                <li>
                    <Link to={"/pedidos"} onClick={(e)=>{ handleClick(); enableMenu(e); }}>Pedidos</Link>
                </li>
            </ul>
        </nav>
    );
}

export { HeaderNaV }