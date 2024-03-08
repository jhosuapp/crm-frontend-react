//Hooks react
import { ClientContext } from "../../context/ClientContext";
import { useContext } from "react";

const ClientFilter = ()=>{
    const { filterState, setValue } = useContext(ClientContext);

    return(
        <article className="clients-filter">
            <p>Se han encontrado <b>{filterState.length}</b> resultados</p>
            <form>
                <input type="text" onChange={(e)=>{  setValue(e.target.value) }} placeholder="buscar" />
            </form>
        </article>
    )
}

export { ClientFilter }