import styles from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('modal-wrapper');

function ModalBackDrop(props) {
    return (
        <div className={styles.modalBackdrop} onClick={props.onClose}></div>
    );
}

function ModalContent(props) {
    return (
        <div className={styles.modalBody}>
            <button type="button" className={styles.modalClose}>x</button>
            {props.title ? <h3>{props.title}</h3> : null}
            <div className={styles.modalInner}>{props.children}</div>
        </div>
    );
}

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModalBackDrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalContent title={props.title}>{props.children}</ModalContent>, portalElement)}
        </React.Fragment>
    );
}

export default Modal