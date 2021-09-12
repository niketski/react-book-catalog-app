import Modal from '../ui/Modal';
import styles from './AddBookModal.module.css';

function AddBookModal(props) {
    return (
        <Modal title="Add Book" onClose={props.onClose}>
            <div className={styles.addBookForm}>
                <form>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-title">ISBN</label>
                        <input type="text" id="book-ISBN" placeholder="Title"/>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-isbn">ISBN</label>
                        <input type="text" id="book-isbn" placeholder="ISBN"/>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-author">Author</label>
                        <input type="text" id="book-author" placeholder="Author"/>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-publisher">Publisher</label>
                        <input type="text" id="book-publisher" placeholder="Publisher"/>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-year-published">Year Published</label>
                        <input type="text" id="book-year-published" placeholder="Year Published"/>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-category">Category</label>
                        <input type="text" id="book-category" placeholder="Category"/>
                    </div>
                    <button type="submit" className={`btnPrimary ${styles.btnPrimary}`}>Submit</button>
                </form>
            </div>
        </Modal>
    );
}

export default AddBookModal;