import iconDelete from '../../../assets/svg/icon-delete.svg';
import iconEdit from '../../../assets/svg/icon-edit.svg';

const ClientActions = ()=>{
    return(
        <div className="actions">
            <button>
                <img src={ iconDelete } alt="icon delete" />
            </button>
            <button>
                <img src={ iconEdit } alt="icon edit" />
            </button>
        </div>
    );
}

export {  ClientActions } 