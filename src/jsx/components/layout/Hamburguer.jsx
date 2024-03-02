import { useState } from "react"

const Hamburger = ()=>{
    //State for enabled hamburger menu
    const [hamburger, setHamburger] = useState(false);
    //Enable menu in mobile
    const enableMenu = (e)=>{
        e.target.closest('header').classList.toggle('enable');
        setHamburger(!hamburger);
    }
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