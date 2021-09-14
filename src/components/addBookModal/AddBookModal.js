import Modal from '../ui/Modal';
import styles from './AddBookModal.module.css';
import useInput from '../../hooks/use-input';

function AddBookModal(props) {
    const { 
        value: titleValue,
        isValid: titleIsvalid,
        hasError: titleHasError,
        inputChangehandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        inputResetHandler: titleResetHandler
     } = useInput(value => value.trim().length !== 0);

     const { 
        value: isbnValue,
        isValid: isbnIsvalid,
        hasError: isbnHasError,
        inputChangehandler: isbnChangeHandler,
        inputBlurHandler: isbnBlurHandler,
        inputResetHandler: isbnResetHandler
     } = useInput(value => value.trim().length !== 0);

    

    return (
        <Modal title="Add Book" onClose={props.onClose}>
            <div className={styles.addBookForm}>
                <form>
                    <div className={`inputField ${titleHasError ? 'invalid' : ''} ${styles.inputField}`}>
                        <label htmlFor="book-title">ISBN</label>
                        <input 
                            type="text" 
                            id="book-title" 
                            placeholder="Title" 
                            onChange={titleChangeHandler} 
                            onBlur={titleBlurHandler} 
                            value={titleValue}/>
                        <div className="vaildationMessage">Please fill out this field.</div>
                    </div>
                    <div className={`inputField ${isbnHasError ? 'invalid' : ''} ${styles.inputField}`}>
                        <label htmlFor="book-isbn">ISBN</label>
                        <input 
                            type="text" 
                            id="book-isbn" 
                            placeholder="ISBN"
                            onChange={isbnChangeHandler} 
                            onBlur={isbnBlurHandler} 
                            value={isbnValue}/>
                        <div className="vaildationMessage">Please fill out this field.</div>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-author">Author</label>
                        <input type="text" id="book-author" placeholder="Author"/>
                        <div className="vaildationMessage">invalid.</div>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-publisher">Publisher</label>
                        <input type="text" id="book-publisher" placeholder="Publisher"/>
                        <div className="vaildationMessage">invalid.</div>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-year-published">Year Published</label>
                        <input type="text" id="book-year-published" placeholder="Year Published"/>
                        <div className="vaildationMessage">invalid.</div>
                    </div>
                    <div className={`inputField ${styles.inputField}`}>
                        <label htmlFor="book-category">Category</label>
                        <input type="text" id="book-category" placeholder="Category"/>
                        <div className="vaildationMessage">invalid.</div>
                    </div>
                    <button type="submit" className={`btnPrimary ${styles.btnPrimary}`}>Submit</button>
                </form>
            </div>
        </Modal>
    );
}

export default AddBookModal;