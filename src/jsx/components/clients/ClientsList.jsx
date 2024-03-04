const ClientsList = ({ _id, name, last_name, phone })=>{
    return(
        <>
            <p key={ _id }>{name}{last_name}{phone}</p>
        </>
    )
}

export { ClientsList }