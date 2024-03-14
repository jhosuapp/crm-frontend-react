import { createContext, useState } from "react";

const GlobalContext = createContext();


const GlobalProvider = ({ children })=>{
    //Global states
    const [ globalError, setGlobalError ] = useState(false);
    const [ globalModal, setGlobalModal ] = useState(false);
    const [globalModalConfirm, setGlobalModalConfirm] = useState(false);

    return (
        <GlobalContext.Provider value={ { 
            globalError, setGlobalError, globalModal, setGlobalModal, globalModalConfirm, setGlobalModalConfirm
        } }>
            { children }
        </GlobalContext.Provider>
    );
}


export { GlobalContext, GlobalProvider }