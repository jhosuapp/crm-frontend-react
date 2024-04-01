const ErrorMessage = ( { text, cls } )=>{
    return (
        <div className={`${cls} error`}>
            <h4>{ text }</h4>
        </div>
    );
}

export { ErrorMessage }