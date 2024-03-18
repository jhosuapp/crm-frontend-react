
import { Link } from "react-router-dom";
import { useContext } from "react";
//Global context
import { GlobalContext } from "../../context/GlobalContext";


const Title = ({ text_title, cls, btn_text, btn_link })=>{

    const { handleClick } = useContext(GlobalContext);

    return(
        <article className={`custom-title ${cls}`}>
            <h1>{text_title}</h1>
            { btn_text && <Link to={btn_link} onClick={ ()=>{ handleClick() } } className="btn">{btn_text}</Link> }
        </article>
    );
}

export { Title }