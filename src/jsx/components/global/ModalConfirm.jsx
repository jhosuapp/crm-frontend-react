import { Link } from 'react-router-dom';
//Hooks react
import { useContext } from 'react';
//Global context
import { GlobalContext } from '../../context/GlobalContext';
//Icons
import iconDanger from '../../../assets/svg/icon-danger.svg';

const ModalConfirm = ({ cls, message, link, handleEvent })=>{

    const  { setGlobalModalConfirm } = useContext(GlobalContext);
    
    return(
        <section className={`modal ${cls}`}>
            <article className="modal__bg"></article>
            <article className="modal__content">
                <picture>
                    <img src={ iconDanger } alt="icon" />
                </picture>
                <p>{ message }</p>
                <div className="block">
                    <Link to={ link } className="btn btn--success" onClick={()=>{ 
                        handleEvent(); 
                        setGlobalModalConfirm(false); 
                    }}>
                        continuar
                    </Link>
                    <Link className="btn btn--danger" onClick={()=>{ setGlobalModalConfirm(false) }}>cancelar</Link>
                </div>
            </article>
        </section>
    )
}

export { ModalConfirm }