import { createContext, useState } from "react";

const GlobalContext = createContext();


const GlobalProvider = ({ children })=>{
    //Global states
    const [ globalError, setGlobalError ] = useState(false);
    const [ globalModal, setGlobalModal ] = useState(false);
    const [ globalModalConfirm, setGlobalModalConfirm ] = useState(false);
    const [ globalTransition, setGlobalTransition ] = useState(false);

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

    return (
        <GlobalContext.Provider value={ { 
            globalError, setGlobalError, globalModal, setGlobalModal, globalModalConfirm, setGlobalModalConfirm, globalTransition, handleClick
        } }>
            { children }
        </GlobalContext.Provider>
    );
}


export { GlobalContext, GlobalProvider }