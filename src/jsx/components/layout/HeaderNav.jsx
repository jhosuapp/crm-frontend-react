//Hook react
import { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//Global context
import { GlobalContext } from "../../context/GlobalContext";


const HeaderNaV = ()=>{
    //Global context
    const { handleClick, enableMenu, auth, token, setAuth, VerifyToken } = useContext(GlobalContext);
    const navigate = useNavigate();
    //Verify token
    useEffect(()=>{
        VerifyToken()
        .then((res)=>{
            setAuth(res);
        }).catch(err=>{
            navigate('/iniciar-sesion');
        });
    }, [token]);
    //Get state auth user
    const { auth:authUser } = auth;

    if(authUser){
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
                    <li>
                        <a className='btn btn--tertiary'>Cerrar sesión</a>
                    </li>
                </ul>
            </nav>
        );
    }else{
        return(
            <nav>
                <ul>
                    <li>
                        <Link to={"/iniciar-sesion"} onClick={(e)=>{ handleClick(); enableMenu(e); }}>Iniciar sesión</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export { HeaderNaV }