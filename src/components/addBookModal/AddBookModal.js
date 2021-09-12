import Modal from '../ui/Modal';

function AddBookModal(props) {
    return (
        <Modal title="Add Book" onClose={props.onClose}>
            <p>Hello world</p>
        </Modal>
    );
}

export default AddBookModal;