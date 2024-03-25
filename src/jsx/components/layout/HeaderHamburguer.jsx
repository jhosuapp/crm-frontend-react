import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


const Hamburger = ()=>{
    const { hamburger, enableMenu } = useContext(GlobalContext);
    //Return hamburger
    return (
        <div 
            className={'hamburger ' + (hamburger && 'active')} 
            onClick={(e)=>{ enableMenu(e); }}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export { Hamburger }