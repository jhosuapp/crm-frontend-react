import { Container } from "../global/Container";

const Login = ()=>{
    return (
        <Container cls={'container container--bg custom-fonts login'}> 
            <article>
                <h1>Iniciar sesión</h1>
                <form className="custom-input">
                    <div className="block-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name="email" id="email" />
                    </div>
                    <div className="block-input">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder="Contraseña" name="password" id="password" />
                    </div>
                    <div className="block-actions">
                        <button className="btn">Iniciar sesión</button>
                    </div>
                </form>
            </article>
        </Container>
    )
}

export { Login }