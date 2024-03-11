import { Link } from 'react-router-dom';

const Modal = ({ cls, icon, message, link })=>{
    return(
        <section className={`modal ${cls}`}>
            <article className="modal__bg"></article>
            <article className="modal__content">
                <picture>
                    <img src={icon} alt="icon" />
                </picture>
                <p>{ message }</p>
                <Link to={ link } className="btn">continuar</Link>
            </article>
        </section>
    )
}

export { Modal }