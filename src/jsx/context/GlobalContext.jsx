//Hooks react
import { createContext, useState } from "react";
//Verify token
import { VerifyToken } from '../components/auth/VerifyToken';

const GlobalContext = createContext();


const GlobalProvider = ({ children })=>{
    //Global states
    const [ globalError, setGlobalError ] = useState(false);
    const [ globalModal, setGlobalModal ] = useState(false);
    const [ globalModalConfirm, setGlobalModalConfirm ] = useState(false);
    const [ globalTransition, setGlobalTransition ] = useState(false);
    const [ globalDelete, setGlobalDelete ] = useState('');
    const [ hamburger, setHamburger ] = useState(false);
    const [ token, setToken ] = useState('');
    const [ auth, setAuth ] = useState({
        token: "",
        auth: false
    });

    //Show && hidde transition
    const handleClick = ()=>{
        const transition = document.querySelector('.transition');
        //Update state
        setGlobalTransition(true);
        setTimeout(()=>{
            transition.classList.add('animate-top');
        }, 500);
        setTimeout(()=>{
            setGlobalTransition(false);
            transition.classList.remove('animate-top');
        },1300);
    }

    //Show and hide menu mobile
    const enableMenu = (e)=>{
        e.target.closest('header').classList.toggle('enable');
        setHamburger(!hamburger);
    }

    //Logout
    const Logout = () =>{
        localStorage.removeItem('t0k3n');
        setToken('');
    }

    return (
        <GlobalContext.Provider value={ { 
            globalError, 
            setGlobalError, 
            globalModal, 
            setGlobalModal, 
            globalModalConfirm, 
            setGlobalModalConfirm, 
            globalTransition, 
            handleClick,
            globalDelete, 
            setGlobalDelete,
            enableMenu,
            hamburger, 
            setHamburger,
            auth, 
            setAuth,
            VerifyToken,
            token, 
            setToken,
            Logout,
        } }>
            { children }
        </GlobalContext.Provider>
    );
}


export { GlobalContext, GlobalProvider }