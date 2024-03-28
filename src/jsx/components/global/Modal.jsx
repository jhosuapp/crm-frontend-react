import { Link } from 'react-router-dom';
//Hooks react
import { useContext } from 'react';
import { createPortal } from 'react-dom';
//Global context
import { GlobalContext } from '../../context/GlobalContext';
//Icons
import iconError from '../../../assets/svg/icon-error.svg';
import iconSuccess from '../../../assets/svg/icon-success.svg';

const Modal = ({ cls, icon, message, link })=>{

    const  { setGlobalModal, handleClick } = useContext(GlobalContext);
    
    return createPortal(
        <section className={`modal ${cls}`}>
            <article className="modal__bg"></article>
            <article className="modal__content">
                <picture>
                    <img src={icon ? iconError : iconSuccess} alt="icon" />
                </picture>
                <p>{ message }</p>
                <Link to={ link } className="btn" onClick={()=>{ setGlobalModal(false), handleClick() }}>continuar</Link>
            </article>
        </section>,
        document.getElementById('modal-content')
    )
}

export { Modal }