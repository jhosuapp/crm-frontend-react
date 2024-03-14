const ClientFilter = ( { filter, setValue } )=>{

    return(
        <article className="clients-filter">
            <p>Se han encontrado <b>{filter.length}</b> resultados</p>
            <form>
                <input type="text" onChange={(e)=>{  setValue(e.target.value) }} placeholder="buscar" />
            </form>
        </article>
    )
}

export { ClientFilter }