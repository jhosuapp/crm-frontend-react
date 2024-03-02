const Container = ({ children, cls})=>{
    return(
        <section className={ cls }>
            { children }
        </section>
    )
}

export { Container }