import React from 'react';
import './Modal.module.css'

const Modal = (props) => {
  return (
    <div className={props.active ? 'modal active': 'modal'} onClick={()=>props.setActive(false)}>
      {/* <div className={props.active ? 'modal-content active': 'modal-content'} onClick={e=>e.stopPropagation()}>
      {props.children}
      </div> */}
      <form className='form_login'>
      <div className='box_loginForm' >
        <button onClick={props.onClick} className='btn'>
  
          Buy tickets
        </button>
      </div>
    </form>
    </div>
  );
};

export default Modal;