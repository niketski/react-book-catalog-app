import styles from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../../context/ModalContext';

const portalElement = document.getElementById('modal-wrapper');

function ModalBackDrop(props) {
    return (
        <div className={styles.modalBackdrop} onClick={props.onClose}></div>
    );
}

function ModalContent(props) {
    return (
        <div className={styles.modalBody}>
            <button type="button" className={styles.modalClose} onClick={props.onClose}>x</button>
            {props.title ? <h3>{props.title}</h3> : null}
            <div className={styles.modalInner}>{props.children}</div>
        </div>
    );
}

function Modal(props) {
    return (
        <ModalContext.Consumer>{
            (modalContext) => {
                const { hideModal } = modalContext;

                return (
                    <React.Fragment>
                        {ReactDOM.createPortal(<ModalBackDrop onClose={hideModal} />, portalElement)}
                        {ReactDOM.createPortal(<ModalContent title={props.title} onClose={hideModal}>{props.children}</ModalContent>, portalElement)}
                    </React.Fragment>
                );
            }
        }</ModalContext.Consumer>
    );
}

export default Modal