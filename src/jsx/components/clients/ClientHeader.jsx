const ClientHeader = ()=>{
    return(
        <div className="clients-list__header">
            <div className="item">
                <p>Nombre</p>
            </div>
            <div className="item">
                <p>Correo</p>
            </div>
            <div className="item">
                <p>Télefono</p>
            </div>
            <div className="item">
                <p>editar</p>
            </div>
            <div className="item">
                <p>eliminar</p>
            </div>
        </div>
    );
}

export { ClientHeader }