import { Link } from "react-router-dom";


const Title = ({ text_title, cls, btn_text, btn_link })=>{
    return(
        <article className={`custom-title ${cls}`}>
            <h1>{text_title}</h1>
            { btn_text && <Link to={btn_link} className="btn">{btn_text}</Link> }
        </article>
    );
}

export { Title }