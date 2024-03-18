import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Transition = ()=>{

    const { globalTransition } = useContext(GlobalContext);

    return( 
        <section className={'transition ' + `${globalTransition && 'animate'}`}>
            <div></div>
            <div></div>
            <div></div>
        </section>
    )
}

export { Transition }