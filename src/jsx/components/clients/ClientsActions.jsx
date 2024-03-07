import iconDelete from '../../../assets/svg/icon-delete.svg';
import iconEdit from '../../../assets/svg/icon-edit.svg';

const ClientActions = ()=>{
    return(
        <>
            <button className="item">
                <img src={ iconEdit } alt="icon edit" />
            </button>
            <button className="item">
                <img src={ iconDelete } alt="icon delete" />
            </button>
        </>
    );
}

export {  ClientActions } 