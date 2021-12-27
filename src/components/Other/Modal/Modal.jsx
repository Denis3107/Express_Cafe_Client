import React from 'react';
import "./Modal.css"

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "Modal active":"Modal"} onClick={()=>{setActive()}}>
            <div className={active ? "Modal__content active":"Modal__content"} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;