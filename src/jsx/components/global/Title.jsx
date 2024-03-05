import { Link } from "react-router-dom";


const Title = ({ text, btn_text })=>{
    return(
        <article className='custom-title'>
            <h1>{text}</h1>
            <Link to={'/crear-cliente'} className="btn">{btn_text}</Link>
        </article>
    );
}

export { Title }